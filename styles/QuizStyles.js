import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  questionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionImage: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: 'contain',
  },
  optionText: {
    fontSize: 20,
  },
  selectedOption: {
    backgroundColor: '#007bff',
  },
  selectedOptionText: {
    color: '#fff',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    marginLeft: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
});
  
export default styles;