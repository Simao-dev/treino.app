import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ExecucaoTreinoScreen() {
  // State to track completed sets
  const [completedSets, setCompletedSets] = useState<{ [key: number]: boolean }>({
    1: true, // Let's pretend the first one is completed to match the 25% wireframe idea
    2: false,
    3: false,
    4: false,
  });

  const toggleSet = (setId: number) => {
    setCompletedSets(prev => ({
      ...prev,
      [setId]: !prev[setId]
    }));
  };

  const totalSets = 4;
  const completedCount = Object.values(completedSets).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalSets) * 100);

  const setsData = [
    { id: 1, reps: '10' },
    { id: 2, reps: '10' },
    { id: 3, reps: '10' },
    { id: 4, reps: '10' },
  ];

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
          <Ionicons name="image-outline" size={48} color="#374151" />
        </View>

        {/* Title and Progress Section */}
        <View className="bg-[#121214] pt-6 px-6 mb-4">
          <Text className="text-gray-400 font-medium mb-1 uppercase tracking-wider text-xs">Execução Atual</Text>
          <View className="flex-row justify-between items-end mb-2">
            <Text className="text-white font-bold text-2xl">Leg press 45</Text>
            <Text className="text-[#7C3AED] font-bold text-lg">{progressPercentage}% <Text className="text-gray-500 text-sm font-medium">({completedCount}/{totalSets})</Text></Text>
          </View>
        </View>

        {/* Sets Checklist */}
        <View className="px-6 flex-1">
          {setsData.map((set) => {
            const isCompleted = completedSets[set.id];
            
            return (
              <View 
                key={set.id} 
                className={`flex-row items-center justify-between bg-[#1A1A1E] p-4 rounded-2xl border ${isCompleted ? 'border-[#7C3AED]/30 opacity-70' : 'border-[#29292E]'} mb-3`}
              >
                <View className="flex-row items-center flex-1">
                  {/* Set Number */}
                  <View className="w-8 h-8 rounded-full bg-[#29292E] items-center justify-center mr-3">
                    <Text className="text-white font-bold">{set.id}</Text>
                  </View>
                  
                  {/* Reps Info */}
                  <Text className={`font-bold text-base ${isCompleted ? 'text-gray-500 line-through' : 'text-white'}`}>
                    10 repetições
                  </Text>
                </View>

                {/* Actions */}
                <View className="flex-row items-center">
                  <TouchableOpacity className="mr-4 px-3 py-1.5 rounded-lg bg-[#29292E]">
                    <Text className="text-[#7C3AED] font-semibold text-xs">Editar série</Text>
                  </TouchableOpacity>

                  {/* Checkbox */}
                  <TouchableOpacity 
                    className={`w-8 h-8 rounded-xl items-center justify-center border-2 ${isCompleted ? 'bg-[#7C3AED] border-[#7C3AED]' : 'border-[#374151] bg-[#121214]'}`}
                    onPress={() => toggleSet(set.id)}
                  >
                    {isCompleted && <Ionicons name="checkmark" size={18} color="#fff" />}
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>

        {/* Next Exercise Preview */}
        <View className="px-6 mt-4 mb-6">
          <View className="bg-[#1A1A1E] rounded-2xl border border-[#29292E] p-4 flex-row items-center">
            <View className="w-12 h-12 bg-[#29292E] rounded-xl items-center justify-center mr-4">
              <Ionicons name="play-skip-forward" size={20} color="#9CA3AF" />
            </View>
            <View className="flex-1">
              <Text className="text-gray-400 text-xs font-medium uppercase mb-1">Próximo exercício</Text>
              <Text className="text-white font-bold text-base">Cadeira extensora</Text>
            </View>
          </View>
        </View>

        {/* Bottom Action Button */}
        <View className="px-6 mb-8">
          <TouchableOpacity 
            className="w-full bg-[#7C3AED] py-4 rounded-2xl items-center shadow-md"
            onPress={() => router.back()} // For now, goes back. Later could go to next exercise.
          >
            <Text className="text-white font-bold text-lg">
              {completedCount === totalSets ? 'Finalizar Exercício' : 'Pular Exercício'}
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
