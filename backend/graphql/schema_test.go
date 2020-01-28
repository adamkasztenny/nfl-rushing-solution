package graphql

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/suite"
)

type schemaSuite struct {
	suite.Suite
	testQuery string
}

type GraphQLResult struct {
	Data   map[string]interface{} `json:"data"`
	Errors []interface{}          `json:"errors"`
}

func (suite *schemaSuite) SetupSuite() {
	suite.testQuery = `{"query": "query { __schema { types { name } } }", "variables": {}}`
}

func (suite *schemaSuite) TestSchemaInitialization() {
	assert.NotPanics(suite.T(), func() {
		Handler()
	})
}

func (suite *schemaSuite) TestServesSchemaOverHTTP() {
	result := suite.makeRequest("POST", suite.testQuery)
	assert.Equal(suite.T(), http.StatusOK, result.StatusCode)

	asGraphQLResult := suite.convertToGraphQLResult(result.Body)
	assert.NotEmpty(suite.T(), asGraphQLResult.Data)
	assert.Empty(suite.T(), asGraphQLResult.Errors)
}

func (suite *schemaSuite) TestReturnsErrorWhenUsingGET() {
	result := suite.makeRequest("GET", suite.testQuery)
	assert.Equal(suite.T(), http.StatusOK, result.StatusCode)

	asGraphQLResult := suite.convertToGraphQLResult(result.Body)
	assert.Empty(suite.T(), asGraphQLResult.Data)
	assert.NotEmpty(suite.T(), asGraphQLResult.Errors)
}

func (suite *schemaSuite) TestReturnsErrorWhenQueryIsMalformed() {
	result := suite.makeRequest("GET", "a malformed query")
	assert.Equal(suite.T(), http.StatusOK, result.StatusCode)

	asGraphQLResult := suite.convertToGraphQLResult(result.Body)
	assert.Empty(suite.T(), asGraphQLResult.Data)
	assert.NotEmpty(suite.T(), asGraphQLResult.Errors)
}

func (suite *schemaSuite) TestReturnsErrorWhenQueryDoesNotExist() {
	result := suite.makeRequest("GET", `"query": "query { doesNotExist { name } }", "variables": {}`)
	assert.Equal(suite.T(), http.StatusOK, result.StatusCode)

	asGraphQLResult := suite.convertToGraphQLResult(result.Body)
	assert.Empty(suite.T(), asGraphQLResult.Data)
	assert.NotEmpty(suite.T(), asGraphQLResult.Errors)
}

func (suite *schemaSuite) makeRequest(method, body string) *http.Response {
	request := httptest.NewRequest(method, "/graphql", strings.NewReader(body))
	responseRecorder := httptest.NewRecorder()

	Handler().ServeHTTP(responseRecorder, request)
	return responseRecorder.Result()
}

func (suite *schemaSuite) convertToGraphQLResult(body io.ReadCloser) GraphQLResult {
	var result GraphQLResult
	err := json.NewDecoder(body).Decode(&result)
	assert.Nil(suite.T(), err)
	return result
}

func TestSchemaSuite(t *testing.T) {
	suite.Run(t, new(schemaSuite))
}
