export default function getDefaultCtaLink() {
    // For the tracking system to work, we need to use this link vs something
    // with a redirect like https://www.rotowire.com/subscribe. Using a redirect
    // will break the cross-site tracking system.
    return 'https://www.rotowire.com/subscribe/create-account.php';
  }
  