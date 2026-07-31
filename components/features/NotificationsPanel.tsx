"use client";

import React from 'react';
import { SidePanel } from '@/components/ui/SidePanel';

export interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsPanel({ isOpen, onClose }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: 'info',
      title: 'System Update',
      message: 'ASWINIX AI Engine v2.4 has been deployed. Prediction models are now 12% more accurate for wet tracks.',
      time: '10 mins ago',
      icon: 'update',
      unread: true,
    },
    {
      id: 2,
      type: 'warning',
      title: 'Weather Alert',
      message: 'Heavy rain expected at Flemington this afternoon. Track condition downgraded to Heavy (8).',
      time: '1 hour ago',
      icon: 'rainy',
      unread: true,
    },
    {
      id: 3,
      type: 'success',
      title: 'Race Won',
      message: 'Your Top Pick "Thunder Strike" won Race 4 at Flemington! View the race breakdown now.',
      time: '3 hours ago',
      icon: 'emoji_events',
      unread: false,
    },
    {
      id: 4,
      type: 'primary',
      title: 'New AI Insight',
      message: 'Track Bias Shift detected at Rosehill. Inside gates are showing a 22% advantage today.',
      time: 'Yesterday',
      icon: 'analytics',
      unread: false,
    }
  ];

  return (
    <SidePanel isOpen={isOpen} onClose={onClose} title="Notifications" position="right">
      <div className="flex flex-col gap-4">
        {notifications.map((notif) => (
          <div 
            key={notif.id} 
            className={`p-4 rounded-xl border ${notif.unread ? 'bg-surface/50 border-primary/30' : 'bg-transparent border-border'} flex gap-4 transition-colors hover:border-primary/50 cursor-pointer`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              notif.type === 'info' ? 'bg-info/20 text-info' :
              notif.type === 'warning' ? 'bg-warning/20 text-warning' :
              notif.type === 'success' ? 'bg-success/20 text-success' :
              'bg-primary/20 text-primary'
            }`}>
              <span className="material-symbols-rounded">{notif.icon}</span>
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-bold text-white">{notif.title}</h4>
                {notif.unread && <span className="w-2 h-2 bg-primary rounded-full shrink-0 mt-1.5"></span>}
              </div>
              <p className="text-xs text-textSecondary mt-1 leading-relaxed">
                {notif.message}
              </p>
              <span className="text-[10px] text-textSecondary font-medium uppercase tracking-wider mt-3 block">
                {notif.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SidePanel>
  );
}
