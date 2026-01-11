"use client"

import { Card, CardContent } from "@repo/ui"
import { Heart, Users, Sparkles } from "lucide-react"

export default function AcercaDePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div>
        <h1 className="text-2xl font-bold">Acerca de Esta Aplicación</h1>
        <p className="text-sm text-muted-foreground">
          La historia detrás de este proyecto
        </p>
      </div>

      <Card className="rounded-xl">
        <CardContent className="p-6 md:p-8">
          <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-trust/10">
                <Heart className="h-6 w-6 text-trust" />
              </div>
              <h2 className="!mt-0 !mb-0">¿Por qué nació este proyecto?</h2>
            </div>

            <p className="lead">
              Esta aplicación nació de una experiencia personal que muchas familias mexicanas comparten: la frustración de intentar ayudar a nuestros seres queridos a invertir de manera segura.
            </p>

            <p>
              Cuando intenté configurar una cuenta de Cetes Directo para mi madre, me encontré con un proceso complejo, confuso y poco accesible. Lo que debería haber sido un trámite sencillo se convirtió en una experiencia frustrante que tomó mucho más tiempo del necesario. En ese momento me di cuenta de que si una persona con conocimientos técnicos tenía dificultades, ¿qué tan difícil sería para alguien sin experiencia digital?
            </p>

            <div className="flex items-center gap-3 mb-4 mt-8">
              <div className="p-3 rounded-full bg-info/10">
                <Sparkles className="h-6 w-6 text-info" />
              </div>
              <h2 className="!mt-0 !mb-0">Una mejor manera de invertir</h2>
            </div>

            <p>
              Esta aplicación reimagina cómo debería ser la experiencia de invertir en instrumentos gubernamentales. Está construida siguiendo las mejores prácticas en:
            </p>

            <ul>
              <li><strong>Accesibilidad:</strong> Diseñada para ser usable por personas de todas las edades y habilidades, con navegación clara, contraste adecuado, y soporte para lectores de pantalla.</li>
              <li><strong>Experiencia de Usuario (UX):</strong> Cada pantalla fue pensada para ser intuitiva, con flujos claros y lenguaje sencillo que no requiere conocimientos financieros avanzados.</li>
              <li><strong>Diseño Responsivo:</strong> Funciona perfectamente en cualquier dispositivo, desde un teléfono móvil hasta una computadora de escritorio.</li>
              <li><strong>Progressive Web App (PWA):</strong> Puede instalarse en el dispositivo y funcionar sin conexión, para que siempre tengas acceso a tu información.</li>
              <li><strong>Tecnologías Modernas:</strong> Construida con Next.js, React, y Tailwind CSS para garantizar un rendimiento óptimo y mantenibilidad a largo plazo.</li>
            </ul>

            <div className="flex items-center gap-3 mb-4 mt-8">
              <div className="p-3 rounded-full bg-success/10">
                <Users className="h-6 w-6 text-success" />
              </div>
              <h2 className="!mt-0 !mb-0">Una esperanza para el futuro</h2>
            </div>

            <p>
              Mi esperanza es que las personas encargadas de Cetes Directo vean este proyecto y se inspiren a mejorar su plataforma oficial. Los mexicanos merecen herramientas financieras que sean tan accesibles y fáciles de usar como las mejores aplicaciones del mundo.
            </p>

            <p>
              Este no es solo un ejercicio técnico. Es una demostración de que es posible crear experiencias digitales que realmente pongan al usuario en el centro, que respeten su tiempo y que democraticen el acceso a inversiones seguras.
            </p>

            <p className="text-muted-foreground italic border-l-4 border-trust pl-4 my-6">
              Si una madre puede invertir sin ayuda, sabré que lo hemos logrado.
            </p>

            <p>
              Esta es una aplicación de demostración creada con fines educativos y de prueba de concepto. No está afiliada con Cetes Directo, la Secretaría de Hacienda, ni Nacional Financiera.
            </p>
          </article>
        </CardContent>
      </Card>
    </div>
  )
}
