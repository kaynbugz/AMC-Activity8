import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const PersonalInfo = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.name}>Christian Ken G. Bugto</Text>
        <Text style={styles.course}>Bachelor of Science in Information Technology</Text>

        <Text style={styles.sectionTitle}>Educational Background</Text>
        <Text style={styles.education}>📍 Elementary - Ninoy Aquino Elementary School</Text>
        <Text style={styles.education}>📍 Junior High School - Longos National High School</Text>
        <Text style={styles.education}>📍 College - Global Reciprocal Colleges</Text>

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

        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          <Image source={require('./assets/javaimage.png')} style={styles.skillImage} />
          <Image source={require('./assets/pythonimage.webp')} style={styles.skillImage} />
          <Image source={require('./assets/csharpimage.png')} style={styles.skillImage} />
        </View>

        <Text style={styles.sectionTitle}>Projects 1</Text>
        <View style={styles.projectsContainer}>
          <Image source={require('./assets/LOGINPROJECT1POS.png')} style={styles.projectImage} />
          <Image source={require('./assets/PROJECT1POS.png')} style={styles.projectImage} />
        </View>
        <Text style={styles.projectDescription}>
          This is a simple computerized inventory system that I developed using a hardware scanner. 
          It automatically detects products entering the inventory, allowing for efficient stock tracking 
          and management. This project showcases my ability to integrate software with hardware solutions.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  course: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  education: {
    fontSize: 16,
    marginBottom: 5,
  },
  about: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
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
    width: 120,
    height: 120,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  projectDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default PersonalInfo;
