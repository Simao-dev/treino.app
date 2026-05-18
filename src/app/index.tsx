import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [idade, setIdade] = useState('');
  const [termosAceitos, setTermosAceitos] = useState(false);

  // Mask and validate the date string (DD/MM/YYYY)
  const handleDateChange = (text: string) => {
    // Remove tudo que não for número (validação de caracteres válidos)
    const cleaned = text.replace(/[^0-9]/g, '');
    
    // Aplica a máscara
    let masked = cleaned;
    if (cleaned.length > 2) {
      masked = cleaned.substring(0, 2) + '/' + cleaned.substring(2);
    }
    if (cleaned.length > 4) {
      masked = masked.substring(0, 5) + '/' + cleaned.substring(4, 8);
    }
    
    setDataNascimento(masked);
  };

  // Calculate age when date changes
  useEffect(() => {
    // Se a data estiver completa no formato DD/MM/AAAA
    if (dataNascimento.length === 10) {
      const parts = dataNascimento.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1; // Meses começam em 0 no Date do JS
      const year = parseInt(parts[2], 10);

      const birthDate = new Date(year, month, day);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      
      // Se o mês atual for menor que o mês de nascimento, ou se for o mesmo mês mas o dia atual for menor, subtrai 1 ano
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (!isNaN(age) && age >= 0 && age < 130) {
        setIdade(age.toString());
      } else {
        setIdade('');
      }
    } else {
      setIdade('');
    }
  }, [dataNascimento]);

  return (
    <SafeAreaView className="flex-1 bg-[#121214]">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6">
          
          {/* Profile Picture with Camera Icon */}
          <View className="items-center mt-10 mb-8">
            <View className="w-28 h-28 rounded-full bg-[#1A1A1E] items-center justify-center border border-gray-800 relative">
              <Ionicons name="person" size={50} color="#374151" />
              
              {/* Camera Button Badge */}
              <TouchableOpacity className="absolute bottom-0 right-0 w-9 h-9 bg-[#7C3AED] rounded-full items-center justify-center border-[3px] border-[#121214]">
                <Ionicons name="camera" size={16} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Form Fields */}
          <View className="w-full gap-y-4">
            <TextInput
              className="w-full bg-[#1A1A1E] text-white px-4 py-3.5 rounded-xl border border-[#29292E] font-medium"
              placeholder="Nome completo"
              placeholderTextColor="#9CA3AF"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              className="w-full bg-[#1A1A1E] text-white px-4 py-3.5 rounded-xl border border-[#29292E] font-medium"
              placeholder="Data de nascimento (DD/MM/AAAA)"
              placeholderTextColor="#9CA3AF"
              value={dataNascimento}
              onChangeText={handleDateChange}
              keyboardType="numeric"
              maxLength={10}
            />

            <TextInput
              className="w-full bg-[#1A1A1E] text-gray-500 px-4 py-3.5 rounded-xl border border-[#29292E] font-medium opacity-70"
              placeholder="Idade (calculada automaticamente)"
              placeholderTextColor="#6B7280"
              value={idade}
              editable={false}
            />
          </View>

          <View className="flex-1" />

          {/* Terms and Conditions */}
          <View className="flex-row items-center justify-center mt-8 mb-6">
            <TouchableOpacity 
              className={`w-5 h-5 rounded flex items-center justify-center mr-3 border ${termosAceitos ? 'bg-[#7C3AED] border-[#7C3AED]' : 'border-[#29292E] bg-[#1A1A1E]'}`}
              onPress={() => setTermosAceitos(!termosAceitos)}
            >
              {termosAceitos && <Text className="text-white text-xs font-bold">✓</Text>}
            </TouchableOpacity>
            
            <View className="flex-row items-center">
              <Text className="text-gray-400">Termos de uso </Text>
              <TouchableOpacity>
                <Text className="text-[#7C3AED] font-semibold">Ver mais</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity 
            className="w-full bg-[#7C3AED] py-4 rounded-xl items-center shadow-md mb-4"
            onPress={() => router.replace('/(tabs)/home')}
          >
            <Text className="text-white font-bold text-lg">Iniciar</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
