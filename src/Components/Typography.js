import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const H1 = (props) =>
    <Text style={styles.h1}>{props.children}</Text>;

export const Strong = (props) =>
    <Text style={styles.strong}>{props.children}</Text>;

export const P = (props) => {
    let content = props.children;
    if(typeof content === 'string') {
        content = content.replace(/ ?\*BR\* ?/, "\n");
    }

    return <Text style={[styles.paragraph].concat(props.style)}>{content}</Text>;
}

export const Annotation = (props) => {
    return (
        <View style={styles.annotation}>
            {
                React.Children.map(props.children, child => {
                    if(child.type === P) {
                        return React.cloneElement(child, {
                            style: [].concat(child.props.style).concat({fontStyle: 'italic'})
                        });
                    }
                    return child;
                })
            }
        </View>
    );
}

export const Nl = (props) => "\n";

export const ListItem = (props) =>
    <View style={styles.listItem}>
        <Text style={styles.listItemDot}>•</Text>
        <View>
        {
            React.Children.map(props.children, child => {
                if(typeof child === 'string') {
                    return <Text style={[styles.paragraph, styles.listItemText]}>{child}</Text>
                }
                return child;
            })
        }
        </View>
    </View>

const styles = StyleSheet.create({
    h1: {
        fontSize: 24,
        marginVertical: 5,
    },
    strong: {
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 14,
        marginVertical: 3,
    },
    annotation: {
        marginVertical: 10,
        marginHorizontal: -14,
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: '#bcdff1',
        borderRadius: 4,
        backgroundColor: '#d9edf7'
    },
    listItem: {
        flexDirection: 'row',
        marginRight: 14,
    },
    listItemDot: {
        width: 14,
        lineHeight: 22,
    }
});