import neo4j from 'neo4j-driver'

let driver

export function initDriver(uri,username, password){
    driver=neo4j.driver(uri,neo4j.auth.basic(username,password))

    return driver.verifyConnectivity().then(()=>driver)
}

export function getDriver() {
  return driver;
}

export function closeDriver() {
  return driver && driver.close();
}