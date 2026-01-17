import {
  ReactionComment,
  ReactionLike,
  ReactionSend,
} from "@/assets/images/icons/icons";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";

interface ReactionsProps {
  id: number;
  title: string;
  icon: React.JSX.Element;
}

interface PostCardProps {
  Profile?: (props: SvgProps) => React.JSX.Element;
  title: string;
  verified: boolean;
  follow: boolean;
  niche: string;
  time: string;
  content: string;
  tags?: string;
  Image?: (props: SvgProps) => React.JSX.Element;
  emoji?: string[];
  likes: number;
  comments: number;
  reposts: number;
}

const PostCard: React.FC<PostCardProps> = ({
  Profile,
  title,
  verified,
  follow,
  niche,
  time,
  content,
  tags,
  Image,
  emoji,
  likes,
  comments,
  reposts,
}) => {
  const [expanded, setExpanded] = useState(false);

  const reactions: ReactionsProps[] = [
    { id: 1, title: "Like", icon: <ReactionLike /> },
    { id: 2, title: "Comment", icon: <ReactionComment /> },
    {
      id: 3,
      title: "Repost",
      icon: <FontAwesome6 name="retweet" size={14} color="#5f5f5f" />,
    },
    { id: 4, title: "Send", icon: <ReactionSend /> },
  ];

  return (
    <View style={styles.main}>
      <View style={styles.cardHeader}>
        {/* left  */}
        <View>{Profile && <Profile />}</View>
        {/* center  */}
        <View style={{ flex: 1, marginStart: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text
              style={{ fontSize: 14.5, fontWeight: "600", color: "#414141" }}
            >
              {title}
            </Text>
            {verified && (
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={17}
                color="#4c4c4c"
              />
            )}
            {follow && (
              <>
                <Entypo name="dot-single" size={12} color="#666666" />
                <Text style={{ fontSize: 11.5, color: "#808080" }}>
                  Following
                </Text>
              </>
            )}
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{ color: "#808080", fontSize: 12, paddingEnd: 35 }}
            >
              {niche}
            </Text>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "gray", fontSize: 12 }}>{time}</Text>
            <Entypo name="dot-single" size={12} color="gray" />
            <Entypo name="globe" size={10} color="gray" />
          </View>
        </View>
        {/* right  */}
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Entypo name="dots-three-vertical" size={16} color="gray" />
          <Ionicons name="close" size={20} color="#525252" />
        </View>
      </View>
      {/* Body Text  */}
      <View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            numberOfLines={expanded ? undefined : 2}
            ellipsizeMode="clip"
            style={{
              width: "91%",
              paddingEnd: 2,
              fontWeight: "500",
              fontSize: 13,
              lineHeight: 20,
              color: "#575757",
            }}
          >
            {content}
            {"\n"}
            <Text style={{ color: "#026ED1", fontSize: 11 }}>
              {tags && tags}
            </Text>
          </Text>
          {!expanded && (
            <Text
              onPress={() => setExpanded(true)}
              style={{ fontSize: 12, color: "#575757", paddingEnd: 5 }}
            >
              ... more
            </Text>
          )}
        </View>
        {/* image  */}
        <View>{Image && <Image />}</View>

        {/* Comment & Reposts Count  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderBottomColor: "#dfdfdf",
            borderBottomWidth: 1,
            marginHorizontal: 10,
          }}
        >
          {/* left  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {emoji?.[0] && (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 12,
                  backgroundColor: "#026ED1",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: -3,
                }}
              >
                <Foundation name="like" size={12} color="#ffffff" />
              </View>
            )}
            {emoji?.[1] && (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 12,
                  backgroundColor: "#cb445b",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: -3,
                }}
              >
                <Entypo name="heart" size={10} color="#ffffff" />
              </View>
            )}
            {emoji?.[2] && (
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 12,
                  backgroundColor: "#19872f",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome6 name="hands-clapping" size={9} color="#ffffff" />
              </View>
            )}
            <View>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#7b7b7b",
                  paddingStart: 3,
                }}
              >
                {" "}
                {likes}
              </Text>
            </View>
          </View>
          {/* right  */}
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: "#818181" }}>
                {comments}
              </Text>
              <Text style={{ fontSize: 13, fontWeight: 500, color: "#818181" }}>
                {" "}
                comments
              </Text>
              <Entypo name="dot-single" size={12} color="#666666" />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#818181",
                }}
              >
                {reposts} reposts
              </Text>
            </View>
          </View>
        </View>

        {/* Reaction  */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingVertical: 10,
            }}
          >
            {reactions.map((item) => (
              <View key={item.id} style={{ alignItems: "center" }}>
                {item.icon}
                <Text style={{ fontSize: 11, color: "#4f4e4e" }}>
                  {item.title}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  main: {
    marginVertical: 7,
    backgroundColor: "#ffffff",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 10,
  },
});
