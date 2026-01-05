"use client"

import { zodResolver } from "@repo/ui"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@repo/ui"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui"
import { Input } from "@repo/ui"
import { ChevronRight } from "lucide-react"

const formSchema = z.object({
  bankAccount: z.object({
    clabe: z.string()
      .min(18, "La CLABE debe tener 18 dígitos")
      .max(18, "La CLABE debe tener 18 dígitos")
      .regex(/^\d{18}$/, "La CLABE debe contener solo números"),
    bankName: z.string().min(1, "El banco es requerido"),
    accountHolder: z.string().min(1, "El titular de la cuenta es requerido")
  })
})

type FormValues = z.infer<typeof formSchema>

interface Step3Props {
  onNext: (data: FormValues) => void
  initialData?: Partial<FormValues>
}

export function Step3Banking({ onNext, initialData }: Step3Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      bankAccount: {
        clabe: "",
        bankName: "",
        accountHolder: ""
      }
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Información bancaria</h2>
          <p className="text-muted-foreground">
            Cuenta para depósitos y retiros de inversiones
          </p>
        </div>

        <FormField
          control={form.control}
          name="bankAccount.clabe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CLABE interbancaria</FormLabel>
              <FormControl>
                <Input
                  placeholder="000000000000000000"
                  className="font-mono"
                  maxLength={18}
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "")
                    field.onChange(value)
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bankAccount.bankName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banco</FormLabel>
              <FormControl>
                <Input placeholder="BBVA México" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bankAccount.accountHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titular de la cuenta</FormLabel>
              <FormControl>
                <Input placeholder="Juan Pérez García" {...field} />
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
