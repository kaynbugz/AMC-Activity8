import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, Dimensions, TouchableWithoutFeedback, Linking } from 'react-native';

const { width, height } = Dimensions.get('window');
const certificates = [
  require('./assets/c1.png'),
  require('./assets/c2.png'),
  require('./assets/c3.png'),
];

const sections = [
  'name', 'education', 'about', 'skills', 'projects', 'certificates'
];

const PersonalInfo = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handlePress = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <ScrollView contentContainerStyle={styles.scrollContainer} style={styles.fullScreen}>
        <View style={styles.container}>
          {currentSection === 0 && (
            <>
              <Text style={styles.name}>Christian Ken G. Bugto</Text>
              <Text style={styles.course}>Bachelor of Science in Information Technology</Text>
            </>
          )}

          {currentSection === 1 && (
            <>
              <Text style={styles.sectionTitle}>Educational Background</Text>
              <Text style={styles.education}>📍 Elementary - Ninoy Aquino Elementary School</Text>
              <Text style={styles.education}>📍 Junior High School - Longos National High School</Text>
              <Text style={styles.education}>📍 College - Global Reciprocal Colleges</Text>
            </>
          )}

          {currentSection === 2 && (
            <>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.about}>
                Hi! I'm a 21-year-old from Caloocan City with a passion for technology and creativity. 
                In my free time, I enjoy playing basketball, diving into online games, watching movies, and listening to music.
              </Text>
              <Text style={styles.about}>
                My dream is to become a software developer, and I'm currently on my journey to mastering programming. 
                So far, I have experience with Java, Python, and C#. I'm always eager to learn new technologies and improve 
                my coding skills to bring my dream to life.
              </Text>
            </>
          )}

          {currentSection === 3 && (
            <>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                <Image source={require('./assets/javaimage.png')} style={styles.skillImage} />
                <Image source={require('./assets/pythonimage.webp')} style={styles.skillImage} />
                <Image source={require('./assets/csharpimage.png')} style={styles.skillImage} />
              </View>
            </>
          )}

          {currentSection === 4 && (
            <>
              <Text style={styles.sectionTitle}>Projects</Text>
              <View style={styles.projectsContainer}>
                <Image source={require('./assets/LOGINPROJECT1POS.png')} style={styles.projectImage} />
                <Image source={require('./assets/PROJECT1POS.png')} style={styles.projectImage} />
              </View>
              <Text style={styles.projectDescription}>
                This is a simple computerized inventory system that I developed using a hardware scanner. 
                It automatically detects products entering the inventory, allowing for efficient stock tracking 
                and management. This project showcases my ability to integrate software with hardware solutions.
              </Text>
              <View style={styles.projectsContainer}>
                <Image source={require('./assets/PROJECT2.png')} style={styles.projectImage} />
              </View>
              <Text style={styles.projectDescription}>
                This is a simple website portfolio built using HTML and CSS. It showcases my personal projects, skills, and contact information in a clean and structured layout.
              </Text>
              <Text style={[styles.projectDescription, { color: 'blue' }]} onPress={() => Linking.openURL('https://github.com/kaynbugz/keyns.git')}>
                LINK PROJECT: https://github.com/kaynbugz/keyns.git
              </Text>
            </>
          )}

          {currentSection === 5 && (
            <>
              <Text style={styles.sectionTitle}>Certificates</Text>
              <FlatList 
                data={certificates}
                horizontal
                renderItem={({ item }) => (
                  <Image source={item} style={styles.certificateImage} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </>
          )}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    width: '100%',
    height: height,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  course: {
    fontSize: 22,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  education: {
    fontSize: 18,
    marginBottom: 5,
  },
  about: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  skillImage: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
  },
  projectsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  projectImage: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  projectDescription: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  certificateImage: {
    width: 200,
    height: 150,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default PersonalInfo;
