import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ListRenderItem} from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import ExpenseForm from '../components/ExpenseForm';
import { Expense } from '../types/expense';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const HomeScreen = ({ navigation }: Props) => {

    const [expense, setExpense] = useState<Expense[]>([]);

    const handleAddExpense = (title: string, amount: string) => {
        
        const newExpense: Expense = {
            id: Math.random().toString(),
            title: title,
            amount: parseFloat(amount),
            date: new Date(),
        };
        setExpense((currentList) => [...currentList, newExpense]);
        console.log('Liste Güncellendi, Eleman Sayısı: ', expense.length+1);
        alert(`Yeni Harcama Eklendi!\nBaşlık: ${title}\nTutar: ${amount}`);
    };

  return (
    <View style={styles.container}>
        <ExpenseForm onAddExpense={handleAddExpense} />
        {/* Liste Alanı */}
      <View style={styles.listContainer}>
        <FlatList
          data={expense}
          keyExtractor={(item) => item.id}
          
          // Eğer liste boşsa ne gösterelim?
          ListEmptyComponent={
            <Text style={styles.emptyText}>Henüz harcama yok.</Text>
          }

          // Her bir satırın tasarımı (Row Mapper)
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDate}>{item.date.toLocaleTimeString()}</Text>
              </View>
              <Text style={styles.cardAmount}>{item.amount} TL</Text>
            </View>
          )}
        />
      </View>
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
    listContainer: {
    flex: 1, // Ekranın geri kalanını kapla
    paddingHorizontal: 20,
    marginTop: 10,
  },
  // YENİ: Liste boşken çıkan yazı
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    color: '#999',
    fontSize: 16,
  },
  // YENİ: Harcama Kartı Tasarımı
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row', // Yan yana diz (Sol: Başlık, Sağ: Tutar)
    justifyContent: 'space-between', // Aralarını aç
    alignItems: 'center',
    marginBottom: 10, // Kartlar arası boşluk
    // Gölge efekti
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  cardAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3D0066',
  },
});

export default HomeScreen