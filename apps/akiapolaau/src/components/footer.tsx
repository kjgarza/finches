import Link from "next/link"
import siteInfo from "@/data/site-info.json"

export function Footer() {
  return (
    <footer className="border-t-4 border-t-trust bg-muted/30 mt-auto">
      {/* Wine gradient accent line */}
      <div className="h-1 bg-gradient-to-r from-trust via-accent to-trust" />

      <div className="container mx-auto px-4 py-8">
        {/* Contact & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-center text-sm text-muted-foreground mb-6">
          <div>
            <p className="font-semibold text-trust mb-2">Atención a Clientes</p>
            <p>{siteInfo.contact.phone}</p>
            <p>{siteInfo.contact.hours.weekdays}</p>
          </div>
          <div>
            <p className="font-semibold text-trust mb-2">Contacto</p>
            <Link href={`mailto:${siteInfo.contact.email}`} className="hover:text-trust transition-colors underline-offset-4 hover:underline">
              {siteInfo.contact.email}
            </Link>
            <p>{siteInfo.contact.hours.saturday}</p>
          </div>
          <div>
            <p className="font-semibold text-trust mb-2">Redes Sociales</p>
            <div className="flex gap-4 justify-center md:justify-center mt-2 flex-wrap">
              <Link href={siteInfo.social.facebook} target="_blank" className="hover:text-trust transition-colors underline-offset-4 hover:underline">
                Facebook
              </Link>
              <Link href={siteInfo.social.twitter} target="_blank" className="hover:text-trust transition-colors underline-offset-4 hover:underline">
                Twitter
              </Link>
              <Link href={siteInfo.social.youtube} target="_blank" className="hover:text-trust transition-colors underline-offset-4 hover:underline">
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Government branding */}
        <div className="border-t border-trust/20 pt-4 text-center">
          <p className="text-sm text-trust font-medium mb-2">Gobierno de México</p>
          <p className="text-xs text-muted-foreground">
            Secretaría de Hacienda y Crédito Público • Nacional Financiera, S.N.C.
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-trust/10 mt-4 pt-4 text-center text-xs text-muted-foreground">
          <p>© 2026 Kristian Garza. Todos los derechos reservados.</p>
          <p className="mt-1">Inversiones sujetas a regulaciones financieras mexicanas • CNBV</p>
        </div>
      </div>
    </footer>
  )
}
