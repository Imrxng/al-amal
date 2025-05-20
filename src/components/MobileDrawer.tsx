import React from 'react';
import Link from 'next/link';
import { IoIosCall, IoIosCloseCircle, IoIosMail } from 'react-icons/io';
import { useRouter } from 'next/router';
import { Gebed } from '@/types/types';
import { FaQuran } from 'react-icons/fa';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  nextGebed: Gebed | null;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, nextGebed }) => {
  const router = useRouter();

  return (
    <>
      {isOpen && (
        <div className="drawer-overlay" onClick={onClose}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <IoIosCloseCircle className="drawer-close-icon" onClick={onClose} />
            </div>
            <nav className="drawer-nav">
              <Link href="/" className={`drawer-link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
              <Link href="/onderwijs" className={`drawer-link ${router.pathname === '/onderwijs' ? 'active' : ''}`}>Onderwijs</Link>
              <Link href="/gebedstijden" className={`drawer-link ${router.pathname === '/gebedstijden' ? 'active' : ''}`}>Gebedstijden</Link>
              <Link href="/contact" className={`drawer-link ${router.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
              <Link href="/doneren" className="drawer-donate">Doneren</Link>
            </nav>
            <div id='nextgebed-drawer'>
               <FaQuran className='icon' />
                {nextGebed ? (
                  <p id='time'>{nextGebed.naam} {nextGebed.tijd}</p>
                ) : (
                  <p id='time'>Laden...</p>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileDrawer;