import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5015/api/news')
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h3" align="center" gutterBottom>
        Latest News : Business
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card variant="outlined" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent style={{ flexGrow: 1 }}>
              {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '15px' }}
                  />
                )}
                <Typography variant="h6" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default News;
