let settings = {
  socialLinks: [
    { label: 'FB', name: 'Facebook', url: 'https://facebook.com/rstate', icon: 'FaFacebookF' },
    { label: 'TW', name: 'Twitter', url: 'https://twitter.com/rstate', icon: 'FaTwitter' },
    { label: 'IG', name: 'Instagram', url: 'https://instagram.com/rstate', icon: 'FaInstagram' },
    { label: 'LN', name: 'LinkedIn', url: 'https://linkedin.com/company/rstate', icon: 'FaLinkedinIn' },
  ],
}

const listeners = new Set()

export function getSettings() {
  return settings
}

export function updateSocialLinks(links) {
  settings = { ...settings, socialLinks: links }
  listeners.forEach(fn => fn(settings))
}

export function onSettingsChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
