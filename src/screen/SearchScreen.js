import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //const SearchScreen = ({navigation}) => {
  const [searchApi, results, errorMessage] = useResults();
  const filterResultByPrice = (price) => {
    //price ==='$'|| '$$' || '$$$'

    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{errorMessage}</Text>
      <ScrollView>
        <ResultsList
          results={filterResultByPrice("$")}
          title="Cost Effective"
          // navigation={navigation}
        />
        <ResultsList
          // navigation={navigation}
          results={filterResultByPrice("$$")}
          title="Bit Pricer"
        />
        <ResultsList
          results={filterResultByPrice("$$$")}
          title="Big Spender!"
          // navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
