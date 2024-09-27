import { Email, Home, Info, Menu, ReceiptLong } from '@mui/icons-material';
import { IconButton, Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { GlobalContext } from '../../../context/store';
import OverlayNavigation from '../../overlays/OverlayNavigation';

import styles from './index.module.scss';

export default function Header() {
  const { openOverlay } = useContext(GlobalContext);
  const router = useRouter();

  const mobileTabs = [
    { icon: <Home fontSize="40px" />, label: 'Home', value: '/' },
    { icon: <ReceiptLong fontSize="40px" />, label: 'Services', value: '/services' },
    { icon: <Email fontSize="40px" />, label: 'Contact', value: '/contact' },
    { icon: <Info fontSize="40px" />, label: 'About', value: '/about' },
  ];

  const desktopTabs = [
    {
      icon: <Home sx={{ marginBottom: '4px' }} />,
      label: 'Home',
      value: '/',
    },
    {
      icon: <ReceiptLong sx={{ marginBottom: '4px' }} />,
      label: 'Services',
      value: '/services',
    },
    {
      icon: <Email sx={{ marginBottom: '4px' }} />,
      label: 'Contact',
      value: '/contact',
    },
    {
      icon: <Info sx={{ marginBottom: '4px' }} />,
      label: 'About',
      value: '/about',
    },
  ];

  const currentTabIndex = desktopTabs.findIndex((t) => {
    const tabValue = t.value.split('/')[1];
    const pathValue = router.pathname.split('/')[1];

    return tabValue === pathValue;
  });

  function changePath(e, index) {
    router.push(desktopTabs[index].value);
  }

  async function openOverlayMenu() {
    const navItem = await openOverlay(<OverlayNavigation items={mobileTabs} />);

    if (navItem) router.push(navItem.value);
  }

  function renderDesktopTabs() {
    return desktopTabs.map((tab) => (
      <Tab
        className={styles.tab}
        sx={{
          minHeight: '68px',
          fontFamily: 'BadScript, Tahoma, Geneva, Verdana, sans-serif',
          lineHeight: 'normal',
        }}
        iconPosition="start"
        icon={tab.icon}
        label={tab.label}
        key={tab.label}
      />
    ));
  }

  return (
    <div className={styles.container}>
      <span className={styles.labelTitle}>Challice Ryan</span>

      <Tabs className={styles.tabs} value={currentTabIndex} onChange={changePath}>
        {renderDesktopTabs()}
      </Tabs>

      <IconButton
        className={styles.iconButtonMenu}
        aria-label="Menu Button"
        sx={{ padding: 0 }}
        size="large"
        onClick={openOverlayMenu}
      >
        <Menu fontSize="32px" />
      </IconButton>
    </div>
  );
}
