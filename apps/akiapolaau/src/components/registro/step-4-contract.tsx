"use client"

import { zodResolver } from "@repo/ui"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@repo/ui"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui"
import { Checkbox } from "@repo/ui"
import { ScrollArea } from "@repo/ui"
import { CheckCircle2 } from "lucide-react"

const formSchema = z.object({
  acceptContract: z.boolean().refine(val => val === true, {
    message: "Debes aceptar el contrato para continuar"
  })
})

type FormValues = z.infer<typeof formSchema>

interface Step4Props {
  onSubmit: (data: FormValues) => void
  isSubmitting: boolean
}

export function Step4Contract({ onSubmit, isSubmitting }: Step4Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acceptContract: false
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Contrato de apertura</h2>
          <p className="text-muted-foreground">
            Lee y acepta el contrato para finalizar tu registro
          </p>
        </div>

        <ScrollArea className="h-96 rounded-lg border bg-muted/30 p-6">
          <div className="space-y-4 pr-4">
            <h3 className="font-semibold text-lg">CONTRATO DE SERVICIOS DE INVERSIÓN</h3>
            
            <p className="text-sm">
              Este contrato establece los términos y condiciones bajo los cuales <strong>Cetesdirecto</strong> 
              proporciona servicios de intermediación para la inversión en instrumentos gubernamentales mexicanos.
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <h4 className="font-semibold mb-1">1. OBJETO DEL CONTRATO</h4>
                <p>
                  El presente contrato tiene por objeto establecer los términos mediante los cuales el Cliente 
                  podrá realizar inversiones en CETES, BONDDIA, y UDIBONOS a través de la plataforma Cetesdirecto.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">2. SERVICIOS</h4>
                <p>
                  Cetesdirecto facilitará la compra, venta, y administración de instrumentos gubernamentales 
                  en nombre del Cliente, actuando como intermediario autorizado.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">3. COMISIONES</h4>
                <p>
                  Los servicios de Cetesdirecto no generan comisiones adicionales. El Cliente solo paga 
                  las comisiones establecidas por las instituciones gubernamentales emisoras.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">4. RIESGOS</h4>
                <p>
                  El Cliente reconoce que toda inversión conlleva riesgos y que los rendimientos pasados 
                  no garantizan rendimientos futuros. Los instrumentos gubernamentales están respaldados 
                  por el gobierno mexicano.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">5. PROTECCIÓN DE DATOS</h4>
                <p>
                  Cetesdirecto se compromete a proteger la información personal del Cliente conforme a 
                  la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-1">6. MODIFICACIONES</h4>
                <p>
                  Cetesdirecto se reserva el derecho de modificar estos términos, notificando al Cliente 
                  con 30 días de anticipación.
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>

        <FormField
          control={form.control}
          name="acceptContract"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="cursor-pointer">
                  He leído y acepto los términos y condiciones del contrato de servicios de inversión. 
                  Confirmo que la información proporcionada es verídica y estoy de acuerdo en recibir 
                  comunicaciones relacionadas con mis inversiones.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full gap-2" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Procesando..."
          ) : (
            <>
              Finalizar registro
              <CheckCircle2 className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
