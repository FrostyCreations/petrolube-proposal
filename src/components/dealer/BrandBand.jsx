import { memo } from 'react';
import { useEditor } from '../../context/EditorContext';
import { PlLockup } from '../pl/Sections';
import './dealer.css';

// Navy client band: the PetroLube Energy lockup, closing off the proposal before the agency section
const BrandBand = () => {
  const { data } = useEditor();
  const client = data.client || {};

  if (!client.iconUrl) return null;

  return (
    <div className="brand-band">
      <div className="container brand-band-inner">
        <PlLockup client={client} />
        <span className="brand-band-rule" />
      </div>
    </div>
  );
};

export default memo(BrandBand);
