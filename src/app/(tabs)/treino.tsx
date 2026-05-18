import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';

export default function TreinoScreen() {
  const [activeDay, setActiveDay] = useState(1); // 1 = Segunda
  const weekDays = [
    { id: 0, label: 'D' },
    { id: 1, label: 'S' },
    { id: 2, label: 'T' },
    { id: 3, label: 'Q' },
    { id: 4, label: 'Q' },
    { id: 5, label: 'S' },
    { id: 6, label: 'S' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#121214]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
        
        {/* Frequência de Treinos */}
        <View className="bg-[#1A1A1E] rounded-3xl border border-[#29292E] p-5 mb-8 mt-4">
          <View className="flex-row justify-between mb-4">
            {weekDays.map((day) => (
              <TouchableOpacity
                key={day.id}
                onPress={() => setActiveDay(day.id)}
                className={`w-10 h-10 rounded-xl items-center justify-center ${
                  activeDay === day.id ? 'bg-[#7C3AED]' : 'bg-[#29292E]'
                }`}
              >
                <Text className={`font-bold ${activeDay === day.id ? 'text-white' : 'text-gray-400'}`}>
                  {day.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="items-center">
            <Text className="text-gray-300 font-medium">Frequência de treinos</Text>
          </View>
        </View>

        {/* Treino do dia */}
        <View className="mb-8">
          <Text className="text-white font-bold text-xl mb-4">Treino do dia</Text>
          <View className="bg-[#1A1A1E] rounded-3xl border border-[#29292E] overflow-hidden">
            {/* Image Placeholder */}
            <View className="h-40 bg-[#29292E] items-center justify-center">
               <View className="w-12 h-12 bg-gray-600 rounded-md opacity-40" />
            </View>
            
            <View className="flex-row justify-between items-center p-5">
              <Text className="text-white font-bold text-xl">Quadríceps</Text>
              <TouchableOpacity 
                className="bg-[#7C3AED] px-6 py-2.5 rounded-xl"
                onPress={() => router.push('/workout/quadriceps')}
              >
                <Text className="text-white font-bold">Iniciar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Próximos treinos */}
        <View className="mb-6">
          <Text className="text-white font-bold text-xl mb-4">Próximos treinos</Text>
          
          <View className="bg-[#1A1A1E] rounded-2xl border border-[#29292E] p-3 flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              {/* Image Placeholder Small */}
              <View className="w-16 h-16 bg-[#29292E] rounded-xl mr-4 items-center justify-center">
                <View className="w-6 h-6 bg-gray-600 rounded-sm opacity-40" />
              </View>
              <Text className="text-white font-bold text-lg">Bíceps</Text>
            </View>
            
            <TouchableOpacity 
              className="bg-[#7C3AED] px-5 py-2 rounded-xl"
              onPress={() => router.push('/workout/biceps')}
            >
              <Text className="text-white font-bold">Iniciar</Text>
            </TouchableOpacity>
          </View>

          {/* Additional Upcoming Workout (optional to show it's a list) */}
          <View className="bg-[#1A1A1E] rounded-2xl border border-[#29292E] p-3 flex-row items-center justify-between mb-3">
            <View className="flex-row items-center">
              <View className="w-16 h-16 bg-[#29292E] rounded-xl mr-4 items-center justify-center">
                <View className="w-6 h-6 bg-gray-600 rounded-sm opacity-40" />
              </View>
              <Text className="text-white font-bold text-lg">Costas</Text>
            </View>
            <TouchableOpacity 
              className="bg-[#7C3AED] px-5 py-2 rounded-xl opacity-70"
              onPress={() => router.push('/workout/costas')}
            >
              <Text className="text-white font-bold">Iniciar</Text>
            </TouchableOpacity>
          </View>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
