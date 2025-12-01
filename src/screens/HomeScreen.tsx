import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import ExpenseForm from '../components/ExpenseForm';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({ navigation }: Props) => {

    const handleAddExpense = (title: string, amount: string) => {
        // Burada harcamayı kaydetme işlemi yapılabilir
        console.log(`Yeni Harcama - Başlık: ${title}, Tutar: ${amount}`);
        alert(`Yeni Harcama Eklendi!\nBaşlık: ${title}\nTutar: ${amount}`);
    };

  return (
    <View style={styles.container}>
        <ExpenseForm onAddExpense={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    subText: {
      marginTop: 10,  
      fontSize: 16,
      color: '#666',
    },
});

export default HomeScreen