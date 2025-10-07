import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Button from '../component/Button';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu, X, Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';

const pages = ['Home', 'About', 'Our-Process', 'Pricing', 'Our-Client', 'Contact-Us'];
const aboutDropdown = [
    { label: 'Who We Are', to: '/About-Us/Who-We-Are' },
    { label: 'What We Do', to: '/About-Us/What-We-Do' },
    { label: 'Why Choose Us', to: '/About-Us/Why-Choose-Us' }
];

const pageroute = {
    'Home': '/',
    'About': '/About-Us',
    'Our-Process': '/Our-Process',
    'Pricing': '/Pricing',
    'Our-Client': '/Clients',
    'Contact-Us': '/Contact-us'
};

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [hoverAbout, setHoverAbout] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const drawerRef = useRef(null);
    const listItemRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    const isActivePage = (page) => {
        const route = pageroute[page];
        if (page === 'About') return location.pathname.startsWith('/About-Us');
        return location.pathname === route;
    };

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (drawerOpen && drawerRef.current) {
            gsap.set(drawerRef.current, { x: -300, opacity: 0 });
            gsap.to(drawerRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
            gsap.fromTo(
                listItemRefs.current,
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, stagger: 0.1, delay: 0.2, ease: 'back.out(1.7)', duration: 0.6 }
            );
        }
    }, [drawerOpen]);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
        if (!open && drawerRef.current) {
            gsap.to(drawerRef.current, { x: -300, opacity: 0, duration: 0.4, ease: 'power2.inOut' });
        }
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: scrolled ? 'white' : 'rgba(255,255,255,0.55)',
                color: 'black',
                backdropFilter: scrolled ? 'none' : 'saturate(180%) blur(12px)',
                boxShadow: scrolled ? '0 8px 20px rgba(0,0,0,0.1)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.25)',
                transition: 'all 0.3s ease',
                height: { xs: '10vh', md: '12vh' },
                display: 'flex',
                justifyContent: 'center',
                px: { xs: 2, md: 8 },
            }}
        >

            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/Img/headerlogo.png"
                        alt="Zeniushub"
                        onClick={() => navigate(pageroute['Home'])}
                        sx={{
                            height: { xs: 100, sm: 120, md: 156 },
                            width: 'auto',
                            cursor: 'pointer',
                            display: 'block',
                        }}
                    />

                    {/* Desktop Nav (only from lg and up) */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', lg: 'flex' },
                            justifyContent: 'center',
                            gap: { md: 5, lg: 8 },
                            alignItems: 'center',
                        }}
                    >
                        {pages.map((page) =>
                            page === 'About' ? (
                                <Box
                                    key={page}
                                    sx={{ position: 'relative' }}
                                    onMouseEnter={() => setHoverAbout(true)}
                                    onMouseLeave={() => setHoverAbout(false)}
                                >
                                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                                    <Typography
                                        sx={{
                                                fontWeight: 600,
                                            cursor: 'pointer',
                                                color: isActivePage(page) ? 'orangered' : 'black',
                                            '&:hover': { color: 'orangered' },
                                        }}
                                        onClick={() => navigate(pageroute[page])}
                                    >
                                        {page}
                                    </Typography>
                                        {/* plus/minus indicator on lg only */}
                                        <IconButton
                                            onClick={() => setHoverAbout((v) => !v)}
                                            size="small"
                                            sx={{ color: 'orangered', p: 0.5, display: { xs: 'none', lg: 'inline-flex' } }}
                                            aria-label="toggle about menu"
                                        >
                                            {hoverAbout ? <Minus size={18} /> : <Plus size={18} />}
                                        </IconButton>
                                    </Box>

                                    {/* Dropdown */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '100%',
                                            left: 0,
                                            backgroundColor: 'white',
                                            borderRadius: '10px',
                                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                                            zIndex: 20,
                                            minWidth: '220px',
                                            opacity: hoverAbout ? 1 : 0,
                                            visibility: hoverAbout ? 'visible' : 'hidden',
                                            transform: hoverAbout ? 'translateY(0)' : 'translateY(10px)',
                                            transition: 'all 0.3s ease',
                                            pointerEvents: hoverAbout ? 'auto' : 'none',
                                        }}
                                    >
                                        {aboutDropdown.map((item) => (
                                            <Typography
                                                key={item.to}
                                                onClick={() => navigate(item.to)}
                                                sx={{
                                                    px: 2,
                                                    py: 1.2,
                                                    color: location.pathname === item.to ? 'white' : 'black',
                                                    fontWeight: 500,
                                                    cursor: 'pointer',
                                                    backgroundColor: location.pathname === item.to ? 'orangered' : 'transparent',
                                                    '&:hover': { backgroundColor: 'orangered', color: 'white' },
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                        ))}
                                    </Box>
                                </Box>
                            ) : (
                                <Typography
                                    key={page}
                                    onClick={() => navigate(pageroute[page])}
                                    sx={{
                                        fontWeight: 600,
                                        color: isActivePage(page) ? 'orangered' : 'black',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            color: 'orangered',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                width: '100%',
                                                height: '3px',
                                                bottom: -5,
                                                left: 0,
                                                backgroundColor: 'orangered',
                                            },
                                        },
                                        '&::after': {
                                            content: isActivePage(page) ? '""' : '""',
                                            position: 'absolute',
                                            width: isActivePage(page) ? '100%' : 0,
                                            height: '3px',
                                            bottom: -5,
                                            left: 0,
                                            backgroundColor: 'orangered',
                                            transition: 'width .2s ease',
                                        },
                                    }}
                                >
                                    {page}
                                </Typography>
                            )
                        )}
                    </Box>

                    {/* Login / Menu */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        <Button text="Let's Discuss " variant='normal' classname='text-black' onClick={() => {
          const ev = new Event('open-lead-form')
          window.dispatchEvent(ev)
        }} />
                        </Box>
                        <IconButton
                            onClick={toggleDrawer(true)}
                            sx={{
                                display: { xs: 'block', md: 'block', lg: 'none' },
                                color: 'black',
                            }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>

            {/* Drawer (Mobile) */}
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: { xs: 270, sm: 300 },
                        background: 'linear-gradient(135deg, #fff8f3, #ffe4d3)',
                        borderRight: '4px solid orangered',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                    },
                }}
            >
                <Box ref={drawerRef} sx={{ p: 3 }}>
                    {/* Header inside Drawer */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Box component="img" src="/Img/headerlogo.png" alt="Zeniushub" sx={{height: { xs: 50, sm: 80,md:190 }, width: 'auto' }} />
                        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'orangered' }}>
                            <X />
                        </IconButton>
                    </Box>

                    {/* Menu Items */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        {pages.map((page, i) =>
                            page === 'About' ? (
                                <Box key={page}>
                                    <Box
                                        ref={(el) => (listItemRefs.current[i] = el)}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            py: 1.2,
                                            px: 1.5,
                                            gap: 1,
                                            minHeight: 48,
                                            borderRadius: '10px',
                                            borderBottom: '1px solid rgba(0,0,0,0.06)',
                                            '&:hover': { backgroundColor: 'rgba(255,68,0,0.08)' },
                                        }}
                                    >
                                        <Typography
                                            onClick={() => { navigate(pageroute[page]); setDrawerOpen(false); }}
                                            sx={{ fontWeight: 700, color: isActivePage('About') ? 'orangered' : 'black', cursor: 'pointer' }}
                                        >
                                            {page}
                                        </Typography>
                                        <IconButton
                                            onClick={() => setAboutOpen(!aboutOpen)}
                                            sx={{ color: 'orangered', p: 0.5 }}
                                            size="small"
                                        >
                                            {aboutOpen ? <Minus size={18} /> : <Plus size={18} />}
                                        </IconButton>
                                    </Box>
                                    {aboutOpen && (
                                        <Box sx={{ pl: 2.5, mt: 0.5, display: 'flex', flexDirection: 'column' }}>
                                            {aboutDropdown.map((item, idx) => (
                                                <Typography
                                                    key={item.to}
                                                    onClick={() => { navigate(item.to); setDrawerOpen(false); }}
                                                    sx={{
                                                        fontWeight: 500,
                                                        color: 'black',
                                                        py: 0.9,
                                                        px: 0.5,
                                                        borderBottom: idx !== aboutDropdown.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                                                        cursor: 'pointer',
                                                        '&:hover': { color: 'orangered' },
                                                    }}
                                                >
                                                    {item.label}
                                                </Typography>
                                            ))}
                                        </Box>
                                    )}
                                </Box>
                            ) : (
                                <ListItem key={page} disablePadding ref={(el) => (listItemRefs.current[i] = el)} sx={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                                    <ListItemButton
                                        onClick={() => navigate(pageroute[page])}
                                        sx={{
                                            borderRadius: '10px',
                                            px: 1.5,
                                            minHeight: 48,
                                            '&:hover': {
                                                backgroundColor: 'orangered',
                                                '& .MuiListItemText-primary': { color: 'white' },
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: 'rgba(255,68,0,0.08)',
                                            },
                                        }}
                                        selected={isActivePage(page)}
                                    >
                                        <ListItemText
                                            primary={page}
                                            primaryTypographyProps={{
                                                fontWeight: 700,
                                                color: isActivePage(page) ? 'orangered' : 'black',
                                            }}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            )
                        )}
                    </Box>

                    {/* Login at bottom */}
                    <Box sx={{ mt: 4 }}>
                        <Button text="Let's Discuss " variant='normal' classname='text-white' onClick={() => {
          const ev = new Event('open-lead-form')
          window.dispatchEvent(ev)
        }} />
                    </Box>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Header;
