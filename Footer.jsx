import React from 'react';
import { Box, Typography, Link, IconButton,Divider } from '@mui/material';
import { Facebook, Instagram, YouTube, LinkedIn, Twitter } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box  marginTop={3} component="footer" sx={{ color: 'black', textAlign: 'center' }}>
    <Divider textAlign="center">
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <a href="https://www.instagram.com/yet_d_choco_boi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==_" target="_blank" rel="noopener noreferrer">
      <IconButton sx={{padding:2}} aria-label="Instagram">
        <Instagram/>
      </IconButton>
      </a>
      <Divider orientation="vertical" variant="middle" flexItem />
      <a href="https://www.linkedin.com/in/tr-chellapandi-4604ba257" target="_blank" rel="noopener noreferrer">
      <IconButton sx={{padding:2}} aria-label="LinkedIn">
        <LinkedIn />
      </IconButton>
      </a>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton sx={{padding:2}} aria-label="Twitter">
        <Twitter />
      </IconButton>
      <Divider orientation="vertical" variant="middle" flexItem />
      <IconButton sx={{padding:2}} aria-label="Facebook">
        <Facebook />
      </IconButton>
      </Box>
      </Divider>
      <Typography variant="overline" display="block">
        TurfTime
      </Typography>
      <Typography variant="caption" display="block" color="textSecondary">
        Created by Rithesh M
      </Typography>
    </Box>
  );
};

export default Footer;
