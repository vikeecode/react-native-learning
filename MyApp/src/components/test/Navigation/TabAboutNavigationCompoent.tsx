// these are bottom tab naviagtion
//i am using fetch a data and also both of the flatList and other normally fetch a data ok

import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';

type ApiItem = {
  Foo: string;
  Fuzz: number;
  Secret: string;
  id: number;
  title: string;
  body: string;
};

const TabHomeNavigationCompoent = () => {
  // const [data, setData] = useState<ApiItem | null>(null);
  const [data, setData] = useState<ApiItem[]>([]);

  const getApiData = async () => {
    const url =
      // 'https://static-site-api-request-demo.netlify.app/api_data.json';
      'https://jsonplaceholder.typicode.com/posts/';

    let res = await fetch(url, {
      method: 'get',
    });
    const JSON = await res.json();
    setData(JSON);
    console.warn('hii', res);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#ffb',

        // alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, color: 'black', fontStyle: 'italic' }}>
        I am About
      </Text>
      {/* 
      {data.length ? (
        data.map(item => (
          <View
            key={item.id}
            style={{
              padding: 20,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 15, backgroundColor: '#ddd' }}>
              id: {item.id}
            </Text>
            <Text>title: {item.title}</Text>
            <Text>body: {item.body}</Text>
          </View>
        ))
      ) : (
        <Text>Loading...</Text>
      )} */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }: { item: ApiItem }) => (
          <View
            style={{
              padding: 20,
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ fontSize: 15, backgroundColor: '#ffffff' }}>
              id: {item.id}
            </Text>

            <Text>title: {item.title}</Text>
            <Text>body: {item.body}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default TabHomeNavigationCompoent;
