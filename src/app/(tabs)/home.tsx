import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#121214]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
        
        {/* Header Section */}
        <View className="flex-row justify-between items-center mb-8 mt-4">
          <View className="flex-row items-center">
            {/* Profile Picture Placeholder */}
            <View className="w-12 h-12 rounded-full bg-[#1A1A1E] border border-[#29292E] items-center justify-center mr-3">
               <View className="w-5 h-5 bg-gray-700 rounded-sm opacity-50" />
            </View>
            <View>
              <Text className="text-gray-400 text-sm">Olá!</Text>
              <Text className="text-white font-bold text-lg">Pedro</Text>
            </View>
          </View>
          
          {/* Add Button */}
          <TouchableOpacity 
            className="w-10 h-10 rounded-full bg-[#1A1A1E] border border-[#29292E] items-center justify-center"
            onPress={() => router.push('/workout/create')}
          >
            <Text className="text-gray-400 font-bold text-xl leading-none mt-[-2px]">+</Text>
          </TouchableOpacity>
        </View>

        {/* Featured Banner (Treino do dia) */}
        <View className="bg-[#1A1A1E] rounded-3xl border border-[#29292E] overflow-hidden mb-8">
          {/* Image Placeholder Area */}
          <View className="h-48 bg-[#29292E] items-center justify-center">
             <View className="w-12 h-12 bg-gray-600 rounded-md opacity-40" />
          </View>
          
          {/* Bottom Banner Content */}
          <View className="flex-row justify-between items-center p-4">
            <Text className="text-white font-bold text-lg">Quadríceps</Text>
            <TouchableOpacity 
              className="bg-[#7C3AED] px-6 py-2.5 rounded-xl"
              onPress={() => router.push('/workout/quadriceps')}
            >
              <Text className="text-white font-bold">Iniciar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Progress Section */}
        <View className="mb-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white font-bold text-xl">Progresso</Text>
            <TouchableOpacity>
              <Text className="text-[#7C3AED] font-semibold">Ver mais</Text>
            </TouchableOpacity>
          </View>

          <View className="bg-[#1A1A1E] rounded-3xl border border-[#29292E] p-5">
            {/* Row 1 */}
            <View className="flex-row justify-between items-center py-3 border-b border-[#29292E]">
              <Text className="text-gray-300 font-medium">Treino</Text>
              <Text className="text-white font-bold">15%</Text>
            </View>
            
            {/* Row 2 */}
            <View className="flex-row justify-between items-center py-3 border-b border-[#29292E]">
              <Text className="text-gray-300 font-medium">Dias frequentados</Text>
              <Text className="text-white font-bold">50%</Text>
            </View>
            
            {/* Row 3 */}
            <View className="flex-row justify-between items-center pt-3">
              <Text className="text-gray-300 font-medium">Dias para trocar o treino</Text>
              <Text className="text-white font-bold">80%</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
