import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ConferirTreinoScreen() {
  const { id } = useLocalSearchParams();
  
  // Format the title from the ID (e.g., "quadriceps" -> "Quadríceps")
  const title = typeof id === 'string' 
    ? id.charAt(0).toUpperCase() + id.slice(1) 
    : 'Treino';

  return (
    <SafeAreaView className="flex-1 bg-[#121214]">
      {/* Back Button Overlay */}
      <View className="absolute top-12 left-6 z-10">
        <TouchableOpacity 
          className="w-10 h-10 bg-[#121214]/80 rounded-full items-center justify-center border border-[#29292E]"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={false}>
        
        {/* Header Image Placeholder */}
        <View className="h-64 bg-[#1A1A1E] items-center justify-center">
          <View className="w-16 h-16 bg-gray-700 rounded-md opacity-40" />
        </View>

        {/* Title Section */}
        <View className="items-center -mt-6 bg-[#121214] pt-8 pb-6 px-6">
          <Text className="text-white font-bold text-2xl mb-1">{title}</Text>
          <Text className="text-gray-400 font-medium mb-3">Segunda-feira</Text>
          <View className="bg-[#1A1A1E] px-4 py-2 rounded-full border border-[#29292E]">
            <Text className="text-gray-300 text-sm font-medium">tempo de execução <Text className="font-bold text-white">00:00</Text></Text>
          </View>
        </View>

        {/* Exercise List Card */}
        <View className="bg-[#1A1A1E] rounded-t-3xl border-t border-[#29292E] p-6 flex-1 min-h-[400px]">
          
          {/* Exercise Item 1 */}
          <View className="flex-row items-center bg-[#121214] p-4 rounded-2xl border border-[#29292E] mb-3">
            <View className="w-12 h-12 bg-[#29292E] rounded-xl items-center justify-center mr-4">
              <Ionicons name="barbell" size={20} color="#9CA3AF" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-base mb-1">Leg press 45</Text>
              <Text className="text-gray-400 text-sm">4 séries / 10 repetições</Text>
            </View>
            <View className="w-6 h-6 border-2 border-[#29292E] rounded-md bg-[#1A1A1E]" />
          </View>

          {/* Exercise Item 2 */}
          <View className="flex-row items-center bg-[#121214] p-4 rounded-2xl border border-[#29292E] mb-3">
            <View className="w-12 h-12 bg-[#29292E] rounded-xl items-center justify-center mr-4">
              <Ionicons name="barbell" size={20} color="#9CA3AF" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-base mb-1">Cadeira extensora</Text>
              <Text className="text-gray-400 text-sm">4 séries / 12 repetições</Text>
            </View>
            <View className="w-6 h-6 border-2 border-[#29292E] rounded-md bg-[#1A1A1E]" />
          </View>

          {/* Exercise Item 3 */}
          <View className="flex-row items-center bg-[#121214] p-4 rounded-2xl border border-[#29292E] mb-3">
            <View className="w-12 h-12 bg-[#29292E] rounded-xl items-center justify-center mr-4">
              <Ionicons name="barbell" size={20} color="#9CA3AF" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-base mb-1">Agachamento livre</Text>
              <Text className="text-gray-400 text-sm">4 séries / 10 repetições</Text>
            </View>
            <View className="w-6 h-6 border-2 border-[#29292E] rounded-md bg-[#1A1A1E]" />
          </View>

          {/* Exercise Item 4 */}
          <View className="flex-row items-center bg-[#121214] p-4 rounded-2xl border border-[#29292E] mb-8">
            <View className="w-12 h-12 bg-[#29292E] rounded-xl items-center justify-center mr-4">
              <Ionicons name="barbell" size={20} color="#9CA3AF" />
            </View>
            <View className="flex-1">
              <Text className="text-white font-bold text-base mb-1">Cadeira flexora</Text>
              <Text className="text-gray-400 text-sm">3 séries / 15 repetições</Text>
            </View>
            <View className="w-6 h-6 border-2 border-[#29292E] rounded-md bg-[#1A1A1E]" />
          </View>

          {/* Bottom Action Button */}
          <TouchableOpacity 
            className="w-full bg-[#7C3AED] py-4 rounded-2xl items-center shadow-md mb-8"
            onPress={() => router.push('/workout/execute')}
          >
            <Text className="text-white font-bold text-lg">Iniciar treino</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
