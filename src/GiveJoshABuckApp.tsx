import { useState } from 'react';
import { Typography, Button, Box, Link, Collapse, Stack } from '@mui/material';
import { QuoteRotator } from './components/QuoteRotater';


export default function GiveJoshABuckApp() {
  const [showMore, setShowMore] = useState(false);

  return (
        <Stack alignItems={"center"}>
       <img height="300px" src="images/DollarBillFront.jpg" alt="Dollar Bill Front"/>
      <Typography variant="h4" gutterBottom>
        You’ve arrived.
      </Typography>
      <Typography variant="h6" gutterBottom>
        This is the part where you give Josh a buck.
      </Typography>

      <Box my={4}>
        <Button
          variant="contained"
          color="success"
          size="large"
          fullWidth
          href="https://venmo.com/givejoshabuck?txn=pay&amount=1&note=You%20gave%20Josh%20a%20buck.%20You%20did%20good.%20givejoshabuck.com"
        >
          Give Josh a Buck
        </Button>
        <Link
          href="https://venmo.com/givejoshabuck?txn=pay&note=Josh%20is%20proud%20of%20you.%20You%20gave%20more%20than%20a%20buck.%20You're%20basically%20a%20saint%20now.%20givejoshabuck.com"
          underline="hover"
          sx={{ display: 'block', mt: 2 }}
        >
          Or give Josh more than a buck
        </Link>
        <Link href="https://joshgivesabuck.com" underline="hover" sx={{ display: 'block', mt: 1, fontSize: '0.9rem' }}>
          Are you a Josh?
        </Link>
      </Box>

        <QuoteRotator/>

      <Box mt={4}>
        <Link component="button" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Hide the deeper Josh' : 'More about Josh'}
        </Link>
        <Collapse in={showMore}>
          <Box mt={2} textAlign="left">
            <Typography variant="subtitle1" gutterBottom>
              Josh’s 2-Step Process:
            </Typography>
            <Typography>- Step 1: Give Josh a buck.</Typography>
            <Typography>- Step 2: Realize it was a one-step process.</Typography>

            <Typography variant="subtitle1" gutterBottom mt={2}>
              FAQs:
            </Typography>
            <Typography gutterBottom>* What do I get in return? → Nothing. That’s the point.</Typography>
            <Typography gutterBottom>* Can I give more than a buck? → Yes. Josh won’t stop you.</Typography>
            <Typography gutterBottom>* Is this a scam? → Only emotionally.</Typography>
            <Typography gutterBottom>* Do I have to be Josh? → No. But if you are, there’s a special site for you.</Typography>
          </Box>
        </Collapse>
      </Box>

      <Box mt={6}>
        <Typography variant="body2">
          Buck the system. Follow <Link href="https://instagram.com/givejoshabuck" target="_blank">@givejoshabuck</Link>.
        </Typography>
        <Typography variant="caption" display="block" mt={2}>
          Josh wishes all to know: This is a one-way act of voluntary giving. No goods or services will be provided. No refunds. You must be 18 or older. Josh receives all bucks with gratitude.
        </Typography>
      </Box>
      </Stack>
  );
}
