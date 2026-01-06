import Image from "next/image"
import Link from "next/link"
import siteInfo from "@/data/site-info.json"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-6">
        {/* Logos */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-6 flex-wrap">
          <div className="relative h-10 sm:h-12 w-auto">
            <Image
              src={siteInfo.logos.hacienda}
              alt="Secretaría de Hacienda"
              width={120}
              height={48}
              className="object-contain h-10 sm:h-12 w-auto"
            />
          </div>
          <div className="relative h-10 sm:h-12 w-auto">
            <Image
              src={siteInfo.logos.nachinalfinanciera}
              alt="Nacional Financiera"
              width={120}
              height={48}
              className="object-contain h-10 sm:h-12 w-auto"
            />
          </div>
          <div className="relative h-10 sm:h-12 w-auto">
            <Image
              src={siteInfo.logos.main}
              alt="Cetesdirecto"
              width={120}
              height={48}
              className="object-contain h-10 sm:h-12 w-auto"
            />
          </div>
        </div>

        {/* Contact & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left text-sm text-muted-foreground mb-4">
          <div>
            <p className="font-semibold text-foreground mb-1">Atención a Clientes</p>
            <p>{siteInfo.contact.phone}</p>
            <p>{siteInfo.contact.hours.weekdays}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Contacto</p>
            <Link href={`mailto:${siteInfo.contact.email}`} className="hover:text-trust transition-colors">
              {siteInfo.contact.email}
            </Link>
            <p>{siteInfo.contact.hours.saturday}</p>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Redes Sociales</p>
            <div className="flex gap-3 justify-center md:justify-start mt-2 flex-wrap">
              <Link href={siteInfo.social.facebook} target="_blank" className="hover:text-trust transition-colors">
                Facebook
              </Link>
              <Link href={siteInfo.social.twitter} target="_blank" className="hover:text-trust transition-colors">
                Twitter
              </Link>
              <Link href={siteInfo.social.youtube} target="_blank" className="hover:text-trust transition-colors">
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-4 text-center text-xs text-muted-foreground">
          <p>© 2026 Kristian Garza. Todos los derechos reservados.</p>
          <p className="mt-1">Inversiones sujetas a regulaciones financieras mexicanas • CNBV</p>
        </div>
      </div>
    </footer>
  )
}
