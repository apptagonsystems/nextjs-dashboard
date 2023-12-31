import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 

type Props = {}

function Login({}: Props) {
  return (
        <div className="max-w-sm mx-auto overflow-hidden">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle className='text-center'>LOGIN</CardTitle>
              <CardDescription className='text-center'>Log into your account</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email address" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Password" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className='w-full'>Login</Button>
            </CardFooter>
          </Card>
        </div>
  )
}

export default Login