import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#121214]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
        
        {/* User Profile Section */}
        <View className="items-center mt-6 mb-10">
          <View className="w-24 h-24 rounded-full bg-[#1A1A1E] border border-[#29292E] items-center justify-center mb-4">
             {/* Profile icon placeholder */}
             <Ionicons name="person" size={40} color="#374151" />
          </View>
          <Text className="text-white font-bold text-2xl">Pedro Simão</Text>
        </View>

        {/* Tool Cards Grid */}
        <View className="flex-row flex-wrap justify-between">
          
          {/* Card 1: Peso */}
          <TouchableOpacity className="w-[48%] bg-[#1A1A1E] rounded-3xl border border-[#29292E] p-4 items-center justify-center aspect-square mb-4">
            <View className="absolute top-4 left-4">
              <Ionicons name="scale-outline" size={24} color="#9CA3AF" />
            </View>
            <View className="w-16 h-16 rounded-full border-4 border-[#29292E] items-center justify-center mt-4">
              <Text className="text-white font-bold text-xl">75kg</Text>
            </View>
          </TouchableOpacity>

          {/* Card 2: Cronômetro */}
          <TouchableOpacity className="w-[48%] bg-[#1A1A1E] rounded-3xl border border-[#29292E] p-4 items-center justify-center aspect-square mb-4">
            <View className="absolute top-4 right-4">
              <Ionicons name="stopwatch-outline" size={24} color="#9CA3AF" />
            </View>
            <View className="w-16 h-16 rounded-full border-4 border-[#29292E] items-center justify-center mt-2 mb-2">
               <View className="w-6 h-6 bg-[#29292E] rounded-sm" />
            </View>
            <Text className="text-gray-300 font-medium text-sm">Cronômetro</Text>
          </TouchableOpacity>

          {/* Card 3: Avaliação Física */}
          <TouchableOpacity className="w-[48%] bg-[#1A1A1E] rounded-3xl border border-[#29292E] p-4 items-center justify-center aspect-square mb-4">
            <View className="absolute top-4 left-4">
              <Ionicons name="document-text-outline" size={24} color="#9CA3AF" />
            </View>
            <View className="w-16 h-16 rounded-full border-4 border-[#29292E] items-center justify-center mt-2 mb-2">
               <View className="w-6 h-6 bg-[#29292E] rounded-sm" />
            </View>
            <Text className="text-gray-300 font-medium text-sm text-center leading-tight">Avaliação Física</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
