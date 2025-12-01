import React, {useState} from 'react';
import {
     View,  
     TextInput, 
     Button, 
     StyleSheet, 
     Alert 
    } from 'react-native';

interface ExpenseFormProps {
    onAddExpense: (title: string, amount: string) => void;
}

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {

    // Memorydeki geçici state değişkenleri
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    // Harcama ekleme metodu
    const handlePress = () => {

        if (title.trim() === '' || amount.trim() === '') {
            Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
            return;
        }

        // Veriyi parent bileşene gönder
        onAddExpense(title, amount);

        // Formu temizle
        setTitle('');
        setAmount('');
    };

    return (
        <View style={styles.formContainer}>
            {/* Başlık Inputu */}
            <TextInput
                style={styles.input}
                placeholder="Harcama Başlığı (örneğin: Market)"
                value={title}
                onChangeText={setTitle}
            />
            {/* Tutar Inputu */}
            <TextInput
                style={styles.input}
                placeholder="Tutar (örneğin: 150)"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
            />
            {/* Kaydet Butonu */}
            <Button title="Harcamayı Ekle"
             onPress={handlePress}
             color="#3D0066"
             />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 4, // Android için gölge
        shadowColor: '#000', // iOS için gölge
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        margin: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        paddingVertical: 5,
        fontSize: 16,
    },
});

export default ExpenseForm;