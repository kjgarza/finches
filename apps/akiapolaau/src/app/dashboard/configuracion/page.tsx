"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui"
import { Button } from "@repo/ui"
import { Input } from "@repo/ui"
import { Label } from "@repo/ui"
import { Switch } from "@repo/ui"
import { Separator } from "@repo/ui"
import { User, Bell, Shield, CreditCard, Globe, Moon, Sun, Smartphone } from "lucide-react"

export default function ConfiguracionPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div>
        <h1 className="text-2xl font-bold">Configuración</h1>
        <p className="text-sm text-muted-foreground">
          Administra tu cuenta y preferencias
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-info/10">
                  <User className="h-5 w-5 text-info" />
                </div>
                <div>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>Actualiza tus datos personales</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nombre</Label>
                  <Input id="firstName" defaultValue="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Apellido</Label>
                  <Input id="lastName" defaultValue="Pérez García" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" defaultValue="juan.perez@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" defaultValue="+52 55 1234 5678" />
              </div>
              <Button>Guardar Cambios</Button>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent">
                  <Bell className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>Gestiona cómo recibes notificaciones</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Notificaciones por Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe actualizaciones por correo electrónico
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Notificaciones por SMS</Label>
                  <p className="text-sm text-muted-foreground">
                    Recibe alertas importantes por mensaje de texto
                  </p>
                </div>
                <Switch
                  checked={smsNotifications}
                  onCheckedChange={setSmsNotifications}
                />
              </div>
              <Separator />
              <div className="space-y-3">
                <Label>Preferencias de Notificaciones</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="deposits" defaultChecked />
                    <Label htmlFor="deposits" className="text-sm font-normal">
                      Depósitos y retiros
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="investments" defaultChecked />
                    <Label htmlFor="investments" className="text-sm font-normal">
                      Inversiones y vencimientos
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="yield" defaultChecked />
                    <Label htmlFor="yield" className="text-sm font-normal">
                      Rendimientos
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="marketing" />
                    <Label htmlFor="marketing" className="text-sm font-normal">
                      Promociones y noticias
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <Shield className="h-5 w-5 text-success" />
                </div>
                <div>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>Protege tu cuenta</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Autenticación de Dos Factores</Label>
                  <p className="text-sm text-muted-foreground">
                    Añade una capa extra de seguridad
                  </p>
                </div>
                <Switch
                  checked={twoFactor}
                  onCheckedChange={setTwoFactor}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Cambiar Contraseña</Label>
                <Input type="password" placeholder="Contraseña actual" />
                <Input type="password" placeholder="Nueva contraseña" />
                <Input type="password" placeholder="Confirmar nueva contraseña" />
                <Button variant="outline" className="w-full">
                  Actualizar Contraseña
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Settings Sidebar */}
        <div className="space-y-6">
          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Globe className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <CardTitle className="text-base">Preferencias</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {darkMode ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  <Label>Modo Oscuro</Label>
                </div>
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Idioma</Label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Español</option>
                  <option>English</option>
                </select>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Moneda</Label>
                <select className="w-full p-2 border rounded-lg">
                  <option>MXN - Peso Mexicano</option>
                  <option>USD - Dólar</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-info/10">
                  <CreditCard className="h-5 w-5 text-info" />
                </div>
                <div>
                  <CardTitle className="text-base">Métodos de Pago</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 border rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-medium">•••• 4532</p>
                    <p className="text-xs text-muted-foreground">BBVA</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Editar
                </Button>
              </div>
              <Button variant="outline" className="w-full gap-2">
                + Agregar Tarjeta
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-xl">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-accent">
                  <Smartphone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-base">Dispositivos</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">iPhone 14 Pro</p>
                      <p className="text-xs text-muted-foreground">Última actividad: Hoy</p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">
                      Activo
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
