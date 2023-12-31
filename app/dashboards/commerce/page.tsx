import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button'
import EcommerceDashboard from '@/components/dashboards/EcommerceDashboard';

type Props = {}

function CommerceDashboard({}: Props) {
  return (
    
    <div className='flex-1 space-y-4 p-4 md:p-8 pt-6	'>
    {/* WELCOME ROW */}
    <div className='flex items-center justify-between space-y-2'>
      {/* LEFT */}
      <h2 className="text-3xl font-bold tracking-tight">Hi, Welcome Back!</h2>
      {/* RIGHT */}
      <div className="hidden md:flex items-center space-x-2">
            <Button>Download</Button>
      </div>
    </div>
    {/* END WELCOME ROW */}
    <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
        </TabsList>
        {/* TAB CONTENT */}

        <TabsContent value="overview" className="space-y-4">
          <EcommerceDashboard/>
        </TabsContent>
      </Tabs>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  </div>

  )
}

export default CommerceDashboard