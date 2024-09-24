import { useState } from 'react'
import { Bell, CreditCard, DollarSign, Home, Package, PieChart, Plus, Search, Settings, Users, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAddSubVendorModalOpen, setIsAddSubVendorModalOpen] = useState(false)
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)
  const [isTopUpModalOpen, setIsTopUpModalOpen] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-blue-600">TeleTop</h1>
        </div>
        <nav className="mt-4">
          <a
            className={`flex items-center px-4 py-2 text-gray-700 ${activeTab === 'dashboard' ? 'bg-blue-100' : ''}`}
            href="#"
            onClick={() => handleTabChange('dashboard')}
          >
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </a>
          <a
            className={`flex items-center px-4 py-2 text-gray-700 ${activeTab === 'sub-vendors' ? 'bg-blue-100' : ''}`}
            href="#"
            onClick={() => handleTabChange('sub-vendors')}
          >
            <Users className="mr-3 h-5 w-5" />
            Sub-vendors
          </a>
          <a
            className={`flex items-center px-4 py-2 text-gray-700 ${activeTab === 'purchases' ? 'bg-blue-100' : ''}`}
            href="#"
            onClick={() => handleTabChange('purchases')}
          >
            <Package className="mr-3 h-5 w-5" />
            Purchases
          </a>
          <a
            className={`flex items-center px-4 py-2 text-gray-700 ${activeTab === 'balance' ? 'bg-blue-100' : ''}`}
            href="#"
            onClick={() => handleTabChange('balance')}
          >
            <DollarSign className="mr-3 h-5 w-5" />
            Balance
          </a>
          <a
            className={`flex items-center px-4 py-2 text-gray-700 ${activeTab === 'top-up' ? 'bg-blue-100' : ''}`}
            href="#"
            onClick={() => handleTabChange('top-up')}
          >
            <CreditCard className="mr-3 h-5 w-5" />
            Top-up
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h2>
            <div className="flex items-center">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="ml-4">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$10,245.00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sub-vendors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">24</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => handleTabChange('sub-vendors')}>View All</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Top-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">156</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" onClick={() => handleTabChange('top-up')}>View Details</Button>
                </CardFooter>
              </Card>
            </div>
          )}

          {/* Sub-vendors Content */}
          {activeTab === 'sub-vendors' && (
            <Card>
              <CardHeader>
                <CardTitle>Sub-vendors Management</CardTitle>
                <CardDescription>Manage your sub-vendors and their allocations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between mb-4">
                  <Input className="w-64" placeholder="Search sub-vendors..." />
                  <Dialog open={isAddSubVendorModalOpen} onOpenChange={setIsAddSubVendorModalOpen}>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" /> Add Sub-vendor
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Sub-vendor</DialogTitle>
                        <DialogDescription>Enter the details of the new sub-vendor.</DialogDescription>
                      </DialogHeader>
                      <form className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Enter sub-vendor name" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter sub-vendor email" />
                        </div>
                        <div>
                          <Label htmlFor="initial-balance">Initial Balance</Label>
                          <Input id="initial-balance" type="number" placeholder="Enter initial balance" />
                        </div>
                        <Button type="submit">Add Sub-vendor</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Balance</th>
                      <th className="text-left pb-2">Status</th>
                      <th className="text-left pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">John Doe</td>
                      <td className="py-2">$1,200</td>
                      <td className="py-2">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                      </td>
                      <td className="py-2">
                        <Button variant="outline" size="sm">Edit</Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2">Jane Smith</td>
                      <td className="py-2">$800</td>
                      <td className="py-2">
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                      </td>
                      <td className="py-2">
                        <Button variant="outline" size="sm">Edit</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}

          {/* Purchases Content */}
          {activeTab === 'purchases' && (
            <Card>
              <CardHeader>
                <CardTitle>Purchase Top-up Points</CardTitle>
                <CardDescription>Buy top-up points from the telecom company</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={isPurchaseModalOpen} onOpenChange={setIsPurchaseModalOpen}>
                  <DialogTrigger asChild>
                    <Button>Make a Purchase</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Purchase Top-up Points</DialogTitle>
                      <DialogDescription>Enter the details for your purchase.</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" type="number" placeholder="Enter amount" />
                      </div>
                      <div>
                        <Label htmlFor="payment-method">Payment Method</Label>
                        <Select>
                          <SelectTrigger id="payment-method">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="credit-card">Credit Card</SelectItem>
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit">Confirm Purchase</Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">Recent Purchases</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Date</th>
                        <th className="text-left pb-2">Amount</th>
                        <th className="text-left pb-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">2023-06-15</td>
                        <td className="py-2">$5,000.00</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">2023-06-10</td>
                        <td className="py-2">$3,000.00</td>
                        <td className="py-2">
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Balance Content */}
          {activeTab === 'balance' && (
            <Card>
              <CardHeader>
                <CardTitle>Balance Information</CardTitle>
                <CardDescription>View and manage your balance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Current Balance</h3>
                    <p className="text-3xl font-bold">$10,245.00</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Recent Transactions</h3>
                    <table className="w-full mt-2">
                      <thead>
                        <tr>
                          <th className="text-left pb-2">Date</th>
                          <th className="text-left pb-2">Description</th>
                          <th className="text-left pb-2">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2">2023-06-15</td>
                          <td className="py-2">Purchase from Telecom Co.</td>
                          <td className="py-2 text-red-600">-$5,000.00</td>
                        </tr>
                        <tr>
                          <td className="py-2">2023-06-14</td>
                          <td className="py-2">Top-up sale to Sub-vendor</td>
                          <td className="py-2 text-green-600">+$1,200.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Top-up Content */}
          {activeTab === 'top-up' && (
            <Card>
              <CardHeader>
                <CardTitle>User Top-up</CardTitle>
                <CardDescription>Perform top-ups for users</CardDescription>
              </CardHeader>
              <CardContent>
                <Dialog open={isTopUpModalOpen} onOpenChange={setIsTopUpModalOpen}>
                  <DialogTrigger asChild>
                    <Button>Perform Top-up</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>User Top-up</DialogTitle>
                      <DialogDescription>Enter the details for the top-up.</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="phone-number">Phone Number</Label>
                        <Input id="phone-number" type="tel" placeholder="Enter phone number" />
                      </div>
                      <div>
                        <Label htmlFor="top-up-amount">Top-up Amount</Label>
                        <Select>
                          <SelectTrigger id="top-up-amount">
                            <SelectValue placeholder="Select amount" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">$5</SelectItem>
                            <SelectItem value="10">$10</SelectItem>
                            <SelectItem value="20">$20</SelectItem>
                            <SelectItem value="50">$50</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button type="submit">Confirm Top-up</Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <div className="mt-4">
                  <h3 className="text-lg font-medium mb-2">Recent Top-ups</h3>
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left pb-2">Date</th>
                        <th className="text-left pb-2">Phone Number</th>
                        <th className="text-left pb-2">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2">2023-06-15</td>
                        <td className="py-2">+1 (555) 123-4567</td>
                        <td className="py-2">$20.00</td>
                      </tr>
                      <tr>
                        <td className="py-2">2023-06-14</td>
                        <td className="py-2">+1 (555) 987-6543</td>
                        <td className="py-2">$10.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}