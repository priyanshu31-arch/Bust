import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 20,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 10,
        },

        tabBarActiveTintColor: '#FF0000',
        tabBarInactiveTintColor: '#000000',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="house.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="doctor"
        options={{
          title: 'Doctor',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="person.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ambulance"
        options={{
          title: 'Ambulance',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="car.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="hospitals"
        options={{
          title: 'Hospitals',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="building.columns.fill" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="person.crop.circle.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
