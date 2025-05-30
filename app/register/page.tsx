import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegistrationForm from "@/components/registration-form"

export const metadata = {
  title: "Register | ASBMUN - The Asian School Model United Nations",
  description: "Register for ASBMUN - The Asian School Model United Nations Conference",
}

export default function RegisterPage() {
  return (
    <main className="flex-1 py-12 md:py-24 bg-asbmun-black min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Registration</h1>
            <p className="text-asbmun-mocha max-w-2xl mx-auto">
              Join us for ASBMUN - The Asian School Model United Nations. Please select your registration type below.
            </p>
          </div>

          <Tabs defaultValue="delegate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-asbmun-mocha border-asbmun-orange">
              <TabsTrigger value="delegate" className="data-[state=active]:bg-asbmun-orange data-[state=active]:text-asbmun-black text-white">Delegate</TabsTrigger>
              <TabsTrigger value="chair" className="data-[state=active]:bg-asbmun-orange data-[state=active]:text-asbmun-black text-white">Chair</TabsTrigger>
            </TabsList>

            <TabsContent value="delegate">
              <Card className="bg-asbmun-mocha border-asbmun-orange">
                <CardHeader>
                  <CardTitle className="text-white">Delegate Registration</CardTitle>
                  <CardDescription className="text-white/80">
                    Register as a delegate to represent a country in one of our committees.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistrationForm type="delegate" />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chair">
              <Card className="bg-asbmun-mocha border-asbmun-orange">
                <CardHeader>
                  <CardTitle className="text-white">Chair Registration</CardTitle>
                  <CardDescription className="text-white/80">
                    Register as a committee chair to moderate debates and guide committee proceedings.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RegistrationForm type="chair" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-asbmun-black p-6 rounded-lg border-2 border-asbmun-orange">
            <h2 className="text-xl font-bold mb-4 text-white">Registration Fees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Early Bird Card - Black Background */}
              <Card className="bg-asbmun-black border-asbmun-orange hover:border-asbmun-orange/80 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Early Bird</CardTitle>
                  <CardDescription className="text-asbmun-mocha">Until January 31, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Delegates</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹3,000</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Chairs</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹2,000</p>
                    </div>
                    <ul className="space-y-2 text-sm text-asbmun-mocha">
                      <li>• Access to all committees</li>
                      <li>• Conference materials</li>
                      <li>• Certificate of participation</li>
                      <li>• Welcome reception</li>
                      <li>• Chair training sessions (chairs only)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Regular Card - Mocha Background */}
              <Card className="bg-asbmun-mocha border-asbmun-orange hover:border-asbmun-orange/80 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Regular</CardTitle>
                  <CardDescription className="text-white/80">February 1 - May 31, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Delegates</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹4,000</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Chairs</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹3,000</p>
                    </div>
                    <ul className="space-y-2 text-sm text-white/90">
                      <li>• Access to all committees</li>
                      <li>• Conference materials</li>
                      <li>• Certificate of participation</li>
                      <li>• Welcome reception</li>
                      <li>• Chair training sessions (chairs only)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Late Card - Black Background */}
              <Card className="bg-asbmun-black border-asbmun-orange hover:border-asbmun-orange/80 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Late</CardTitle>
                  <CardDescription className="text-asbmun-mocha">June 1 - July 1, 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Delegates</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹5,000</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-asbmun-orange">Chairs</p>
                      <p className="text-2xl font-bold mb-2 text-white">₹4,000</p>
                    </div>
                    <ul className="space-y-2 text-sm text-asbmun-mocha">
                      <li>• Access to all committees</li>
                      <li>• Conference materials</li>
                      <li>• Certificate of participation</li>
                      <li>• Welcome reception</li>
                      <li>• Chair training sessions (chairs only)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
