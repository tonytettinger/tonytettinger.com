import * as React from "react"
import { graphql } from "gatsby";
import { Text, Box, Icon, Heading, ListIcon, LinkOverlay, LinkBox, List, ListItem, Flex, VStack } from "@chakra-ui/react";
import { FaCode, FaChevronRight } from 'react-icons/fa'
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
  const posts = data.allMdx.nodes
  return(
    <>
    <Box style={{position: "relative"}}>
      <StaticImage
        alt="Tony by the ocean"
        src="../images/tony_tettinger.jpeg"
        style={{
          width: "100%",
          maxHeight: "320px",
          borderRadius: "0.5rem",
          objectFit: "contain", 
        }}
      />
      <Box style={{position: "absolute", right: "8%", top: "40%", backgroundColor: "transparent" }}> 
        <Icon as={DiHtml5} w={12} h={12} color="gray.900"/>
        <Icon as={DiJavascript1} w={12} h={12} color="gray.900"/>
        <Icon as={DiReact} w={12} h={12} color="gray.900"/>
        <Icon as={DiCss3} w={12} h={12} color="gray.900"/>
      </Box>
    </Box>
      <VStack spacing={4} my={4}>
      <Text>Hello there! I'm Antal Tettinger, aka Tony. I'm a full-stack web developer who loves to create great user experiences and appreciates elegant and practical solutions with technology. Thank you for reading my blog!</Text>
      <Icon as={FaCode}/>
      <Heading as='h2' fontWeight="800" fontSize="xl" css={{textAlign: "center"}} my={6}>Blog Posts</Heading>
      <List>
      {posts.map((post) => {
        return (
          <LinkBox key={post.slug} _hover={{color: "#25BFEB"}}>
            <LinkOverlay href={`/blog/${post.slug}`} >
                <Flex as={ListItem} align="center">
                  <ListIcon as={FaChevronRight}/>
                  {post.frontmatter.title} {post.frontmatter.date}
                 </Flex>
            </LinkOverlay>
          </LinkBox>
        )
      })}
      </List>
      </VStack>
      </>
  )
}

export const pageQuery = graphql`
{
  allMdx(sort: {fields: [frontmatter___title], order: DESC}) {
    nodes {
      frontmatter {
        title
        date
      }
      slug
    }
  }
}

`

export default IndexPage;