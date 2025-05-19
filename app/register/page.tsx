import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegistrationForm from "@/components/registration-form"

export const metadata = {
  title: "Register | Global Model United Nations 2025",
  description: "Register for the Global Model United Nations Conference 2025",
}

export default function RegisterPage() {
  return (
    <main className="flex-1 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Registration</h1>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join us for the Global Model United Nations 2025. Please select your registration type below.
            </p>
          </div>

          <Tabs defaultValue="delegate" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="delegate">Delegate</TabsTrigger>
              <TabsTrigger value="advisor">Advisor</TabsTrigger>
              <TabsTrigger value="observer">Observer</TabsTrigger>
            </TabsList>

            <TabsContent value="delegate">
              <Card>
                <CardHeader>
                  <CardTitle>Delegate Registration</CardTitle>
                  <CardDescription>
                    Register as a delegate to represent a country in one of our committees.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistrationForm type="delegate" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advisor">
              <Card>
                <CardHeader>
                  <CardTitle>Advisor Registration</CardTitle>
                  <CardDescription>Register as a faculty advisor accompanying a delegation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistrationForm type="advisor" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="observer">
              <Card>
                <CardHeader>
                  <CardTitle>Observer Registration</CardTitle>
                  <CardDescription>
                    Register as an observer to attend the conference without participating in committees.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistrationForm type="observer" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-slate-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Registration Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Early Bird</CardTitle>
                  <CardDescription>Until January 31, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">$150</p>
                  <ul className="space-y-2 text-sm">
                    <li>Access to all committees</li>
                    <li>Conference materials</li>
                    <li>Certificate of participation</li>
                    <li>Welcome reception</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regular</CardTitle>
                  <CardDescription>February 1 - May 31, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">$200</p>
                  <ul className="space-y-2 text-sm">
                    <li>Access to all committees</li>
                    <li>Conference materials</li>
                    <li>Certificate of participation</li>
                    <li>Welcome reception</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Late</CardTitle>
                  <CardDescription>June 1 - July 1, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold mb-2">$250</p>
                  <ul className="space-y-2 text-sm">
                    <li>Access to all committees</li>
                    <li>Conference materials</li>
                    <li>Certificate of participation</li>
                    <li>Welcome reception</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
