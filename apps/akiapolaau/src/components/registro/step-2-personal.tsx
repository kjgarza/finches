"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@repo/ui"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui"
import { Input } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { RadioGroup, RadioGroupItem } from "@repo/ui"
import { ChevronRight } from "lucide-react"

const mexicanStates = [
  "Aguascalientes", "Baja California", "Baja California Sur", "Campeche",
  "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima",
  "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México",
  "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
  "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora",
  "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
] as const

const formSchema = z.object({
  curp: z.string()
    .min(18, "El CURP debe tener 18 caracteres")
    .max(18, "El CURP debe tener 18 caracteres")
    .regex(/^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/, "CURP inválido"),
  entity: z.string().min(1, "Selecciona tu entidad federativa"),
  gender: z.enum(["M", "F"], { required_error: "Selecciona tu género" }),
  dateOfBirth: z.string().min(1, "La fecha de nacimiento es requerida"),
  rfc: z.string()
    .min(12, "El RFC debe tener al menos 12 caracteres")
    .max(13, "El RFC debe tener máximo 13 caracteres")
    .regex(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/, "RFC inválido")
})

type FormValues = z.infer<typeof formSchema>

interface Step2Props {
  onNext: (data: FormValues) => void
  initialData?: Partial<FormValues>
}

export function Step2Personal({ onNext, initialData }: Step2Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      curp: "",
      entity: "",
      gender: undefined,
      dateOfBirth: "",
      rfc: ""
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Datos personales</h2>
          <p className="text-muted-foreground">
            Información requerida para la apertura de cuenta
          </p>
        </div>

        <FormField
          control={form.control}
          name="curp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CURP</FormLabel>
              <FormControl>
                <Input
                  placeholder="ABCD123456HDFXXX00"
                  className="uppercase font-mono"
                  maxLength={18}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="entity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entidad federativa</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu entidad" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {mexicanStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Género</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="M" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Masculino
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-2 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="F" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Femenino
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rfc"
          render={({ field }) => (
            <FormItem>
              <FormLabel>RFC</FormLabel>
              <FormControl>
                <Input
                  placeholder="ABCD123456ABC"
                  className="uppercase font-mono"
                  maxLength={13}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full gap-2">
          Siguiente
          <ChevronRight className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  )
}
