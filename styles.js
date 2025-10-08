import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    mainContainer: {
       
        flex: 1,
        backgroundColor: '#E0F7FA', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    

    formCard: { 
        width: '100%',
        maxWidth: 400, 
        backgroundColor: '#FFFFFF', 
        borderRadius: 12,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    reviewCard: { 
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 8,
    },
    

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#01579B', 
        marginBottom: 30,
        textAlign: 'center',
    },

  
    inputContainer: {
        marginBottom: 20, 
    },
    label: {
        fontSize: 14,
        color: '#0288D1', 
        marginBottom: 8,
        fontWeight: '600',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B3E5FC', 
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        backgroundColor: '#F5FFFF', 
        color: '#333333',
    },
    
   
    button: { 
        backgroundColor: '#00BFFF', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 30, 
        width: '100%',
    },
    submitButton: { 
        backgroundColor: '#00BFFF', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',

    },
    buttonText: { 
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    submitButtonText: { 
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },

   
    dataRow: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'flex-start',
    },
    dataLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
        marginRight: 8,
        minWidth: 90, 
    },
    dataValue: {
        fontSize: 16,
        color: '#555555',
        flexShrink: 1,
    },


    buttonsContainer: {
        marginTop: 30,
        width: '100%',
    },
    editButton: { 
      
        backgroundColor: '#64B5F6', 
        marginBottom: 15,
        borderRadius: 8,
        overflow: 'hidden', 
       
    },
});

export default styles;
