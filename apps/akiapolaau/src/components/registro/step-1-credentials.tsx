"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@repo/ui"
import * as z from "zod"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@repo/ui"
import { ChevronRight, Eye, EyeOff } from "lucide-react"

const securityQuestionOptions = [
  "¿Cuál es el nombre de tu primera mascota?",
  "¿En qué ciudad naciste?",
  "¿Cuál es el segundo apellido de tu madre?",
  "¿Cuál fue el modelo de tu primer auto?",
  "¿Cuál es tu comida favorita?"
] as const

const step1Schema = z.object({
  name: z.string().min(3, "Mínimo 3 caracteres"),
  email: z.string().email("Correo inválido"),
  username: z.string().min(3, "Mínimo 3 caracteres").regex(/^[a-z0-9_]+$/, "Solo letras minúsculas, números y guiones bajos"),
  password: z.string().min(8, "Mínimo 8 caracteres").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Debe contener mayúscula, minúscula y número"),
  confirmPassword: z.string(),
  securityQuestion1: z.string().min(1, "Selecciona una pregunta"),
  securityAnswer1: z.string().min(3, "Respuesta demasiado corta"),
  securityQuestion2: z.string().min(1, "Selecciona una pregunta"),
  securityAnswer2: z.string().min(3, "Respuesta demasiado corta"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
})

interface Step1Props {
  onNext: (data: any) => void
  initialData?: any
}

export function Step1Credentials({ onNext, initialData }: Step1Props) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      securityQuestion1: "",
      securityAnswer1: "",
      securityQuestion2: "",
      securityAnswer2: "",
      ...initialData,
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onNext)} className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Credenciales de acceso</h2>
          <p className="text-muted-foreground">
            Crea tu usuario y contraseña para acceder a tu cuenta
          </p>
        </div>

        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre completo</FormLabel>
                <FormControl>
                  <Input placeholder="Juan Pérez García" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="correo@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel>
                <FormControl>
                  <Input placeholder="juanperez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showPassword ? "text" : "password"}
                      placeholder="********" 
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmar contraseña</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input 
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="********" 
                      {...field} 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-3">
            <h3 className="font-semibold">Preguntas secretas</h3>
            <p className="text-sm text-muted-foreground">
              Configura dos preguntas de seguridad para recuperar tu cuenta.
            </p>
          </div>

          <FormField
            control={form.control}
            name="securityQuestion1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta secreta 1</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una pregunta" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {securityQuestionOptions.map((question) => (
                      <SelectItem key={question} value={question}>
                        {question}
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
            name="securityAnswer1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta 1</FormLabel>
                <FormControl>
                  <Input placeholder="Escribe tu respuesta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="securityQuestion2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pregunta secreta 2</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una pregunta distinta" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {securityQuestionOptions.map((question) => (
                      <SelectItem key={question} value={question}>
                        {question}
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
            name="securityAnswer2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Respuesta 2</FormLabel>
                <FormControl>
                  <Input placeholder="Escribe tu respuesta" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Continuar
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </Form>
  )
}
