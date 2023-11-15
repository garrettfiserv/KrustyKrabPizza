package group.KKPizza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.*;
import java.util.Properties;

@SpringBootApplication
public class KkPizzaApplication {

	public static void main(String[] args) {
		SpringApplication.run(KkPizzaApplication.class, args);
		String jdbcUrl = "jdbc:snowflake://VCB70660.us-east-1.snowflakecomputing.com/?warehouse=COMPUTE_WH&db=KRUSTY_KRAB_PIZZA&schema=PIZZERIA&user=garrettboscoe&password=Fiservrules123&role=ACCOUNTADMIN&CLIENT_RESULT_COLUMN_CASE_INSENSITIVE=true&CLIENT_TIMESTAMP_TYPE_MAPPING=TIMESTAMP_NTZ&JDBC_QUERY_RESULT_FORMAT=JSON";
		String selectSQL = "SELECT * FROM KRUSTY_KRAB_PIZZA.PIZZERIA.CUSTOMER";

		try{
			Connection connection = DriverManager.getConnection(jdbcUrl);
			System.out.println("connected");
			Statement stmt = connection.createStatement();
			ResultSet rs = stmt.executeQuery(selectSQL);

            while(rs.next()){
                System.out.println(rs.getString("NAME"));
            }
		}catch(SQLException e){
			e.printStackTrace();
		}
	}

}
