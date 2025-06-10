import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosCall, IoIosCloseCircle, IoIosMail } from 'react-icons/io';
import { useRouter } from 'next/router';
import { Gebed } from '@/types/types';
import { FaQuran, FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  nextGebed: Gebed | null;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, nextGebed }) => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Verbeterde isActive functie voor zowel hoofd- als sublinks
  const isActive = (path: string) => {
    if (router.pathname === path) return true;
    
    // Activiteiten sublinks
    if (path === '/activiteiten' && (
      router.pathname === '/workshop-taal-en-cultuur' ||
      router.pathname === '/jongerenwerking' ||
      router.pathname === '/seniorenwerking' ||
      router.pathname === '/samen-tegen-armoede'
    )) return true;
    
    // Religie sublinks
    if (path === '/religie' && (
      router.pathname === '/islamitisch-gebedshuis' ||
      router.pathname === '/gebedstijden'
    )) return true;
    
    // Ondersteuning sublinks
    if (path === '/ondersteuning' && (
      router.pathname === '/persoonlijke-ondersteuning' ||
      router.pathname === '/mededelingen'
    )) return true;
    
    return false;
  };

  return (
    <>
      {isOpen && (
        <div className="drawer-overlay" onClick={onClose}>
          <div className="drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <IoIosCloseCircle className="drawer-close-icon" onClick={onClose} />
            </div>
            <nav className="drawer-nav">
              <Link href="/" className={`drawer-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              
              {/* Activiteiten dropdown */}
              <div className="drawer-dropdown">
                <div 
                  className={`drawer-link drawer-dropdown-btn ${isActive('/activiteiten') ? 'active' : ''}`}
                  onClick={() => toggleDropdown('activiteiten')}
                >
                  <span>Activiteiten</span>
                  {openDropdown === 'activiteiten' ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {openDropdown === 'activiteiten' && (
                  <div className="drawer-dropdown-content">
                    <Link 
                      href="/workshop-taal-en-cultuur" 
                      className={`drawer-link ${isActive('/workshop-taal-en-cultuur') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Workshop taal en cultuur
                    </Link>
                    <Link 
                      href="/jongerenwerking" 
                      className={`drawer-link ${isActive('/jongerenwerking') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Jongerenwerking
                    </Link>
                    <Link 
                      href="/seniorenwerking" 
                      className={`drawer-link ${isActive('/seniorenwerking') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Seniorenwerking
                    </Link>
                    <Link 
                      href="/samen-tegen-armoede" 
                      className={`drawer-link ${isActive('/samen-tegen-armoede') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Samen tegen armoede
                    </Link>
                  </div>
                )}
              </div>

              {/* Religie dropdown */}
              <div className="drawer-dropdown">
                <div 
                  className={`drawer-link drawer-dropdown-btn ${isActive('/religie') ? 'active' : ''}`}
                  onClick={() => toggleDropdown('religie')}
                >
                  <span>Religie</span>
                  {openDropdown === 'religie' ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {openDropdown === 'religie' && (
                  <div className="drawer-dropdown-content">
                    <Link 
                      href="/islamitisch-gebedshuis" 
                      className={`drawer-link ${isActive('/islamitisch-gebedshuis') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Islamitisch gebedshuis
                    </Link>
                    <Link 
                      href="/gebedstijden" 
                      className={`drawer-link ${isActive('/gebedstijden') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Gebedstijden
                    </Link>
                  </div>
                )}
              </div>

              {/* Ondersteuning dropdown */}
              <div className="drawer-dropdown">
                <div 
                  className={`drawer-link drawer-dropdown-btn ${isActive('/ondersteuning') ? 'active' : ''}`}
                  onClick={() => toggleDropdown('ondersteuning')}
                >
                  <span>Ondersteuning</span>
                  {openDropdown === 'ondersteuning' ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {openDropdown === 'ondersteuning' && (
                  <div className="drawer-dropdown-content">
                    <Link 
                      href="/persoonlijke-ondersteuning" 
                      className={`drawer-link ${isActive('/persoonlijke-ondersteuning') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Persoonlijke ondersteuning
                    </Link>
                    <Link 
                      href="/mededelingen" 
                      className={`drawer-link ${isActive('/mededelingen') ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      Mededelingen
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                className={`drawer-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={onClose}
              >
                Contact
              </Link>
              
              <Link 
                href="/doneren" 
                className="drawer-donate"
                onClick={onClose}
              >
                Doneren
              </Link>
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