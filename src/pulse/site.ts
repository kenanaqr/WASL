import { startPulse } from './pulse.ts'
import type { SiteRules } from './pulse.ts'
import { isInstagram, isMailto, isTel, isWhatsApp } from './rules.ts'

// WASL's two real numbers, as digits only. The demo pages under /demos use
// placeholder numbers and links; those are not in this list, so they never count.
const NUMBERS = ['962797720319', '962791071123']

export const siteRules: SiteRules = {
  classify(href) {
    if (isWhatsApp(href, NUMBERS)) return 'whatsapp'
    if (isTel(href, NUMBERS)) return 'call'
    if (isMailto(href, 'wasljo.com')) return 'email'
    if (isInstagram(href, 'wasljo')) return 'instagram'
    return null
  },
}

startPulse(siteRules)
