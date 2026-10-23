import { createContext, useContext, useState, useEffect } from 'react';
import { proposalData as baseData } from '../data/proposalData';

const EditorContext = createContext(null);

function deepMerge(base, overrides) {
  if (!overrides) return base;
  const result = { ...base };
  for (const key of Object.keys(overrides)) {
    if (
      typeof result[key] === 'object' &&
      result[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = deepMerge(result[key], overrides[key]);
    } else {
      result[key] = overrides[key];
    }
  }
  return result;
}

export function EditorProvider({ children }) {
  const [overrides, setOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('proposalEditorOverrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Merge derived state
  const sectionOrder = overrides.sectionOrder || baseData.sections.map(s => s.id);
  
  const sections = sectionOrder
    .map(id => {
      const baseSection = baseData.sections.find(s => s.id === id);
      if (!baseSection) return null;
      
      const sectionOverrides = (overrides.sections || {})[id] || {};
      
      return {
        ...baseSection,
        data: deepMerge(baseSection.data, sectionOverrides.data || {}),
      };
    })
    .filter(Boolean);

  const data = {
    ...baseData,
    client: deepMerge(baseData.client, overrides.client || {}),
    hero: deepMerge(baseData.hero, overrides.hero || {}),
    sections: sections
  };

  useEffect(() => {
    localStorage.setItem('proposalEditorOverrides', JSON.stringify(overrides));
  }, [overrides]);

  const updateField = (path, value) => {
    setOverrides(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      
      // Handle special path: ['sections', index, 'data', key]
      if (path[0] === 'sections' && typeof path[1] === 'number') {
        const sectionIndex = path[1];
        const sectionId = data.sections[sectionIndex].id;
        const key = path[3];
        
        if (!next.sections) next.sections = {};
        if (!next.sections[sectionId]) next.sections[sectionId] = { data: {} };
        if (!next.sections[sectionId].data) next.sections[sectionId].data = {};
        
        next.sections[sectionId].data[key] = value;
        return next;
      }

      let obj = next;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (obj[key] === undefined || obj[key] === null) {
          obj[key] = typeof path[i + 1] === 'number' ? [] : {};
        }
        obj = obj[key];
      }
      obj[path[path.length - 1]] = value;
      return next;
    });
  };

  const moveSection = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= sections.length) return;

    setOverrides(prev => {
      const next = JSON.parse(JSON.stringify(prev));
      const order = [...(next.sectionOrder || baseData.sections.map(s => s.id))];
      
      const [movedId] = order.splice(index, 1);
      order.splice(newIndex, 0, movedId);
      
      next.sectionOrder = order;
      return next;
    });
  };

  const resetAll = () => {
    setOverrides({});
    localStorage.removeItem('proposalEditorOverrides');
  };

  return (
    <EditorContext.Provider value={{ data, overrides, updateField, moveSection, resetAll, baseData }}>
      {children}
    </EditorContext.Provider>
  );
}

export function useEditor() {
  return useContext(EditorContext);
}
