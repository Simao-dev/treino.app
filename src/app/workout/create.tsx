import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CriarTreinoScreen() {
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
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
          
          {/* Header */}
          <View className="flex-row items-center mb-8">
            <TouchableOpacity 
              className="w-10 h-10 bg-[#1A1A1E] rounded-full items-center justify-center border border-[#29292E] absolute z-10"
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={24} color="#fff" />
            </TouchableOpacity>
            
            <View className="flex-1 items-center">
              <View className="w-16 h-16 rounded-full bg-[#1A1A1E] border border-[#29292E] items-center justify-center mb-2">
                <Ionicons name="person" size={28} color="#374151" />
              </View>
              <Text className="text-white font-bold text-lg">Pedro Simão</Text>
            </View>
          </View>

          {/* Seção Principal (Exercício) */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-white font-bold text-lg">Exercício</Text>
              <TouchableOpacity className="bg-[#7C3AED] px-4 py-1.5 rounded-lg">
                <Text className="text-white font-semibold text-xs">Treinos salvos</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              className="w-full bg-[#1A1A1E] text-white px-4 py-3 rounded-xl border border-[#29292E]"
              placeholder="Nome do treino"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Dia da semana */}
          <View className="mb-8">
            <Text className="text-white font-bold text-lg mb-3">Dia da semana</Text>
            <View className="bg-[#1A1A1E] rounded-2xl border border-[#29292E] p-4 flex-row justify-between">
              {weekDays.map((day) => (
                <TouchableOpacity
                  key={day.id}
                  onPress={() => setActiveDay(day.id)}
                  className={`w-9 h-9 rounded-lg items-center justify-center ${
                    activeDay === day.id ? 'bg-[#7C3AED]' : 'bg-[#29292E]'
                  }`}
                >
                  <Text className={`font-bold ${activeDay === day.id ? 'text-white' : 'text-gray-400'}`}>
                    {day.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Detalhes do Exercício */}
          <View className="mb-8">
            <View className="mb-4">
              <TextInput
                className="w-full bg-[#1A1A1E] text-white px-4 py-3 rounded-xl border border-[#29292E]"
                placeholder="Nome do exercício"
                placeholderTextColor="#9CA3AF"
              />
            </View>
            
            <View className="mb-4">
              <TextInput
                className="w-full bg-[#1A1A1E] text-white px-4 py-3 rounded-xl border border-[#29292E]"
                placeholder="Séries"
                placeholderTextColor="#9CA3AF"
                keyboardType="numeric"
              />
            </View>

            <View className="mb-4">
              <TextInput
                className="w-full bg-[#1A1A1E] text-white px-4 py-3 rounded-xl border border-[#29292E]"
                placeholder="Execução"
                placeholderTextColor="#9CA3AF"
              />
            </View>

            <View className="mb-4">
              <TextInput
                className="w-full bg-[#1A1A1E] text-white px-4 py-3 rounded-xl border border-[#29292E]"
                placeholder="Descanso"
                placeholderTextColor="#9CA3AF"
              />
            </View>
          </View>

          <View className="flex-1" />

          {/* Ações / Botões */}
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity 
              className="w-[48%] bg-[#7C3AED] py-4 rounded-xl items-center shadow-md"
              onPress={() => router.back()}
            >
              <Text className="text-white font-bold text-lg">Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              className="w-[48%] bg-[#1A1A1E] border border-[#29292E] py-4 rounded-xl items-center"
              onPress={() => router.back()}
            >
              <Text className="text-gray-300 font-bold text-lg">Cancelar</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
