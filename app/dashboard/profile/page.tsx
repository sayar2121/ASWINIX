import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function ProfilePage() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in-up py-8 px-4 lg:px-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-heading font-bold uppercase tracking-wide">My Profile</h1>
          <p className="text-sm text-textSecondary mt-1">Manage your account settings and preferences.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Quick Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="text-center group border-border">
            <CardContent className="p-6">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-primary p-[2px] mx-auto">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden bg-bg">
                    <span className="material-symbols-rounded text-[40px] text-textSecondary">person</span>
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:scale-110 transition-transform shadow-premium cursor-pointer flex items-center justify-center">
                  <span className="material-symbols-rounded text-[16px]">photo_camera</span>
                </button>
              </div>
              <h2 className="text-xl font-heading font-bold uppercase tracking-wide">John Doe</h2>
              <p className="text-sm text-textSecondary mb-4">john@example.com</p>
              <Badge variant="default" className="uppercase tracking-wider font-bold">
                Premium Member
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-textSecondary mb-4">Account Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-sm text-textSecondary">Member Since</span>
                  <span className="text-sm font-mono font-bold text-white">Aug 2026</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border/50">
                  <span className="text-sm text-textSecondary">Total Predictions</span>
                  <span className="text-sm font-mono font-bold text-white">142</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-textSecondary">Win Rate</span>
                  <span className="text-sm font-mono font-bold text-primary">68.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Edit Forms */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-heading font-bold uppercase tracking-wide mb-6 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary">person</span>
                Personal Information
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Full Name</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">person</span>
                      <Input 
                        type="text" 
                        defaultValue="John Doe"
                        className="pl-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Email</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">mail</span>
                      <Input 
                        type="email" 
                        defaultValue="john@example.com"
                        className="pl-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Phone Number</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">call</span>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="pl-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Bio</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about yourself..."
                    className="w-full bg-surface/50 border border-border rounded-[16px] px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none text-white placeholder:text-textSecondary/70"
                  ></textarea>
                </div>
                <div className="flex justify-end pt-2">
                  <Button variant="primary" type="button" className="w-full md:w-auto px-6 flex items-center justify-center gap-2">
                    <span className="material-symbols-rounded text-[20px]">save</span>
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-heading font-bold uppercase tracking-wide mb-6 flex items-center gap-2">
                <span className="material-symbols-rounded text-primary">lock</span>
                Security
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Current Password</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">lock</span>
                      <Input 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">New Password</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">lock</span>
                      <Input 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Confirm New Password</label>
                    <div className="relative">
                      <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-textSecondary text-[20px] z-10">lock</span>
                      <Input 
                        type="password" 
                        placeholder="••••••••"
                        className="pl-12"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Button variant="secondary" type="button" className="w-full md:w-auto px-6">
                    Update Password
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
