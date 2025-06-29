import React, { useState } from 'react';
import { User, Package, Settings, LogOut, Edit3, Save, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    name: user?.name || '',
    email: user?.email || ''
  });

  const handleSave = () => {
    // In a real app, this would update the user data
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({
      name: user?.name || '',
      email: user?.email || ''
    });
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view your profile</h2>
        <a href="/login" className="text-blue-600 hover:text-blue-700">
          Go to Login
        </a>
      </div>
    );
  }

  const mockOrders = [
    {
      id: 'ORDER-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 299.99,
      items: ['Premium Wireless Headphones']
    },
    {
      id: 'ORDER-002',
      date: '2024-01-08',
      status: 'Shipped',
      total: 649.98,
      items: ['Smart Fitness Watch', 'Gaming Mechanical Keyboard']
    },
    {
      id: 'ORDER-003',
      date: '2024-01-02',
      status: 'Processing',
      total: 449.99,
      items: ['Ergonomic Office Chair']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                
                {isEditing ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <input
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="flex-1 flex items-center justify-center space-x-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex-1 flex items-center justify-center space-x-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
                    <p className="text-gray-600 mb-4">{user.email}</p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                  <Package className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium text-blue-900">Total Orders</p>
                    <p className="text-blue-700">{mockOrders.length}</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-green-50 rounded-lg">
                  <Settings className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <p className="font-medium text-green-900">Account Status</p>
                    <p className="text-green-700">Active</p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Order History */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order History</h3>
              
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{order.id}</h4>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' 
                            ? 'bg-green-100 text-green-800'
                            : order.status === 'Shipped'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </div>
                        <p className="text-lg font-bold text-gray-900 mt-1">${order.total}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-sm text-gray-600">Items:</p>
                      <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                        {order.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex space-x-3 mt-4">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200">
                        View Details
                      </button>
                      {order.status === 'Delivered' && (
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors duration-200">
                          Reorder
                        </button>
                      )}
                      {order.status === 'Shipped' && (
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors duration-200">
                          Track Order
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {mockOrders.length === 0 && (
                <div className="text-center py-8">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No orders yet</p>
                  <a href="/products" className="text-blue-600 hover:text-blue-700 font-medium">
                    Start shopping
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;