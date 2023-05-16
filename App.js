import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ImageBackground,
  Alert,
  Modal,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalUpdateVisible, setModalUpdateVisible] = useState(false);
  const [liste, setListe] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const newTache = () => {
    setListe([...liste, inputValue]);
    setInputValue("");
  };

  const removeTache = (index) => {
    const removeTache = [...liste];
    removeTache.splice(index, 1);
    setListe(removeTache);
  };

  const updateTache = (index) => {
    const updatedListe = [...liste];
    updatedListe[index] = inputValue;
    setListe(updatedListe);
  };

  const openModal = () => {
    setModalVisible(!modalVisible);
  };

  const openUpdateModal = () => {
    setModalUpdateVisible(!modalUpdateVisible);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://fond-ecran-manga.fr/wp-content/uploads/2020/05/Twitter-One-Piece-600x945.jpg",
        }}
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={[styles.red, styles.bold]}>
              Voici votre programme de la journée :
            </Text>

            {liste.map((item, index) => (
              <View key={index} style={styles.liste}>
                <Text>{item}</Text>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalUpdateVisible}
                  style={styles.modal}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View>
                        <TextInput
                          style={styles.input}
                          placeholder="saisir votre modif"
                          onChangeText={(text) => setInputValue(text)}
                          value={inputValue}
                        />

                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <Button
                            title="Update"
                            onPress={() => updateTache(index)}
                          />
                          <Button
                            title="Fermer"
                            onPress={() => openUpdateModal()}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  style={styles.buttonUpdate}
                  activeOpacity={0.5}
                  onPress={() => openUpdateModal()}
                >
                  <Image
                    source={{
                      uri: "https://www.shutterstock.com/image-vector/edit-icon-square-pen-linear-600w-1157259529.jpg",
                    }}
                    style={styles.buttonImageIconStyle}
                  />
                </TouchableOpacity>
                <Button title="X" onPress={() => removeTache(index)} />
              </View>
            ))}

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              style={styles.modal}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View /*style={{ flexDirection: "row" }}*/>
                    <TextInput
                      style={styles.input}
                      placeholder="saisir votre reponse"
                      onChangeText={(text) => setInputValue(text)}
                      value={inputValue}
                    />

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button title="Add" onPress={() => newTache()} />
                      <Button title="Fermer" onPress={() => openModal()} />
                    </View>
                  </View>
                </View>
              </View>
            </Modal>

            <Button title="Ajouter une tâche" onPress={() => openModal()} />
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  liste: {
    flexDirection: "row",
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 10,
    marginTop: 10,
    width: 350,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  red: {
    color: "red",
    fontSize: 45,
  },
  bold: {
    fontWeight: "bold",
  },
  input: {
    color: "purple",
    borderColor: "purple",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  buttonUpdate: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    height: "auto",
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    resizeMode: "stretch",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});
