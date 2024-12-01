import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#3f51b5', // Match primary theme color
        color: 'white',
        padding: '2rem 0',
        marginTop: '2rem',
        boxShadow: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              Explore our platform for the best deals, trending products, and a seamless shopping experience. Your satisfaction is our priority.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Home
              </Link>
              <Link href="/shop" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Shop
              </Link>
              <Link href="/cart" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Cart
              </Link>
              <Link href="/login" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem', '&:hover': { color: '#f50057' } }}>
                Login
              </Link>
              <Link href="/register" color="inherit" underline="none" sx={{ display: 'block', '&:hover': { color: '#f50057' } }}>
                Register
              </Link>
            </Box>
          </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '1rem' }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Project Maintainer:{' '}
              <Link href="https://www.linkedin.com/in/mirthika-sivakumar-a39043284" color="inherit" sx={{ textDecoration: 'underline', '&:hover': { color: '#f50057' } }}>
                Mirthika Sivakumar
              </Link>
            </Typography>
            <Typography variant="body2">
              Email:{' '}
              <Link href="mailto:mirthikasiva05@gmail.com" color="inherit" sx={{ textDecoration: 'underline', '&:hover': { color: '#f50057' } }}>
                mirthikasiva05@gmail.com
              </Link>
            </Typography>
            <Typography variant="body2">Phone: +91 9360076019</Typography>
            <Typography variant="body2" sx={{ marginTop: '0.5rem' }}>
              Address: Coimbatore ,Tamil Nadu ,India
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            marginTop: '2rem',
            paddingTop: '1rem',
          }}
        >
          <Typography variant="body2">© {new Date().getFullYear()} Mirthika Sivakumar. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
